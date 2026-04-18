import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdminLogin } from "@/components/portfolio/AdminLogin";
import { AdminInbox } from "@/components/portfolio/AdminInbox";

const Admin = () => {
  const [session, setSession] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(!!data.session);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(!!s);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (session === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (!session) {
    return <AdminLogin onSuccess={() => setSession(true)} />;
  }

  return <AdminInbox onLogout={() => setSession(false)} />;
};

export default Admin;
