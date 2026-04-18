import { useState } from "react";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().max(100, "Name must be under 100 characters").optional(),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(1, "Message cannot be empty")
    .max(5000, "Message must be under 5000 characters"),
});

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export const ContactDialog = ({
  open,
  onOpenChange,
  title = "Get in touch",
  description = "Send me a message — I usually reply within 24 hours.",
}: ContactDialogProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const first = parsed.error.errors[0];
      toast({
        title: "Please check the form",
        description: first?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name || null,
      email: parsed.data.email,
      message: parsed.data.message,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Could not send message",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name (optional)</Label>
            <Input
              id="contact-name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              placeholder="Tell me about your project, role, or idea..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              maxLength={5000}
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send message
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
