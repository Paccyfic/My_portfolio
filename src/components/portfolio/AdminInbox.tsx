import { useEffect, useState } from "react";
import { LogOut, Inbox, RefreshCw, Mail, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactMessage {
  id: string;
  name: string | null;
  email: string;
  message: string;
  created_at: string;
}

interface AdminInboxProps {
  onLogout: () => void;
}

export const AdminInbox = ({ onLogout }: AdminInboxProps) => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    setLoading(false);

    if (error) {
      toast({
        title: "Failed to load messages",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setMessages(data ?? []);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  const selectedMessage = messages.find((m) => m.id === selectedId);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="text-lg font-bold tracking-tight">
              <span className="text-gradient">Pacific</span>
              <span className="text-foreground">.dev</span>
            </a>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              Admin
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchMessages}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-1" /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <Inbox className="text-primary" size={24} />
          <h1 className="text-2xl font-bold">Messages</h1>
          <span className="text-sm text-muted-foreground">
            ({messages.length} total)
          </span>
        </div>

        {loading && messages.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-16">
            <Inbox className="mx-auto mb-4 text-muted-foreground" size={48} />
            <p className="text-muted-foreground">No messages yet.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[360px_1fr] gap-6">
            {/* Message list */}
            <div className="space-y-2 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => setSelectedId(msg.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-smooth ${
                    selectedId === msg.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card/50 hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <User size={14} className="text-muted-foreground shrink-0" />
                    <span className="text-sm font-medium text-foreground truncate">
                      {msg.name || "Anonymous"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail size={12} className="text-muted-foreground shrink-0" />
                    <span className="text-xs text-muted-foreground truncate">
                      {msg.email}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {msg.message}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <Clock size={10} className="text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">
                      {formatDate(msg.created_at)}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Message detail */}
            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-card min-h-[300px]">
              {selectedMessage ? (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-bold text-foreground">
                        {selectedMessage.name || "Anonymous"}
                      </h2>
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {selectedMessage.email}
                      </a>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDate(selectedMessage.created_at)}
                    </span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                      <a href={`mailto:${selectedMessage.email}`}>
                        <Mail className="mr-1 h-4 w-4" /> Reply via email
                      </a>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Select a message to view details.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
