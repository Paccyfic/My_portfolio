import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { defaultContent, type ContentKey, type SiteContent } from "@/lib/content";

export const SITE_CONTENT_QUERY_KEY = ["site-content"];

const fetchSiteContent = async (): Promise<SiteContent> => {
  const { data, error } = await supabase.from("portfolio_content").select("key, value");
  if (error || !data) return defaultContent;

  const merged: SiteContent = { ...defaultContent };
  for (const row of data) {
    const key = row.key as ContentKey;
    if (!(key in defaultContent) || row.value == null) continue;
    if (key === "profile") {
      merged.profile = { ...defaultContent.profile, ...(row.value as object) } as SiteContent["profile"];
    } else if (Array.isArray(row.value)) {
      (merged as Record<ContentKey, unknown>)[key] = row.value;
    }
  }
  return merged;
};

/** Portfolio content from Supabase, falling back to built-in defaults. */
export const useSiteContent = (): SiteContent => {
  const { data } = useQuery({
    queryKey: SITE_CONTENT_QUERY_KEY,
    queryFn: fetchSiteContent,
    staleTime: 60_000,
  });
  return data ?? defaultContent;
};
