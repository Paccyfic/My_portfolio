import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { AdminInbox } from "@/components/portfolio/AdminInbox";
import { ProfileEditor } from "@/components/portfolio/admin/ProfileEditor";
import { ExperienceEditor } from "@/components/portfolio/admin/ExperienceEditor";
import { ProjectsEditor } from "@/components/portfolio/admin/ProjectsEditor";
import { SkillsEditor } from "@/components/portfolio/admin/SkillsEditor";

interface AdminDashboardProps {
  onLogout: () => void;
}

export const AdminDashboard = ({ onLogout }: AdminDashboardProps) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-lg font-bold tracking-tight">
              <span className="text-gradient">Pacific</span>
              <span className="text-foreground">.dev</span>
            </a>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">Admin</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-1" /> Sign out
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <Tabs defaultValue="profile">
          <TabsList className="flex flex-wrap h-auto mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="profile"><ProfileEditor /></TabsContent>
          <TabsContent value="experience"><ExperienceEditor /></TabsContent>
          <TabsContent value="projects"><ProjectsEditor /></TabsContent>
          <TabsContent value="skills"><SkillsEditor /></TabsContent>
          <TabsContent value="messages"><AdminInbox /></TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
