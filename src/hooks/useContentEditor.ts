import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { defaultContent, type ContentKey, type SiteContent } from "@/lib/content";
import { SITE_CONTENT_QUERY_KEY, fetchSiteContent } from "@/hooks/useSiteContent";
import type { Json } from "@/integrations/supabase/types";

/** Draft state + save/reset for one section of the portfolio content. */
export const useContentEditor = <K extends ContentKey>(key: K) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: SITE_CONTENT_QUERY_KEY,
    queryFn: fetchSiteContent,
  });
  const [draft, setDraft] = useState<SiteContent[K] | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data && draft === null) setDraft(structuredClone(data[key]));
  }, [data, draft, key]);

  const save = async () => {
    if (draft === null) return;
    setSaving(true);
    const { error } = await supabase
      .from("portfolio_content")
      .upsert({ key, value: draft as unknown as Json, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) {
      toast({
        title: "Could not save",
        description: error.message.includes("portfolio_content")
          ? "The portfolio_content table is missing. Run the SQL migration in Supabase first."
          : error.message,
        variant: "destructive",
      });
      return;
    }
    await queryClient.invalidateQueries({ queryKey: SITE_CONTENT_QUERY_KEY });
    toast({ title: "Saved", description: "Your live portfolio has been updated." });
  };

  const reset = async () => {
    if (!window.confirm("Discard your saved changes and restore the built-in defaults?")) return;
    setSaving(true);
    const { error } = await supabase.from("portfolio_content").delete().eq("key", key);
    setSaving(false);
    if (error) {
      toast({ title: "Could not reset", description: error.message, variant: "destructive" });
      return;
    }
    setDraft(structuredClone(defaultContent[key]));
    await queryClient.invalidateQueries({ queryKey: SITE_CONTENT_QUERY_KEY });
    toast({ title: "Restored defaults" });
  };

  return { draft, setDraft, loading: isLoading || draft === null, saving, save, reset };
};
