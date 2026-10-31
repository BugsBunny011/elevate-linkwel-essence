import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Save, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { type Site } from "@/lib/liftpass";
import { WORK_STAGES, WORK_STATUSES } from "@/lib/liftpass-progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export const SiteProgressEditor = ({ site, onChanged }: { site: Site; onChanged: () => void }) => {
  const [status, setStatus] = useState(site.work_status);
  const [stage, setStage] = useState(site.work_stage);
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const { data: clients = [], refetch } = useQuery({ queryKey: ["site-clients", site.id], queryFn: async () => {
    const { data, error } = await supabase.from("site_client_access").select("id, client_email").eq("site_id", site.id).order("created_at");
    if (error) throw error;
    return data;
  }});
  const save = async () => {
    setBusy(true);
    const { error } = await supabase.from("sites").update({ work_status: status, work_stage: status === "completed" ? "handover" : stage }).eq("id", site.id);
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Work progress saved"); onChanged();
  };
  const addClient = async (event: React.FormEvent) => {
    event.preventDefault(); setBusy(true);
    const { error } = await supabase.from("site_client_access").insert({ site_id: site.id, client_email: email.trim().toLowerCase() });
    setBusy(false);
    if (error) return toast.error(error.code === "23505" ? "This client already has access." : error.message);
    setEmail(""); refetch(); toast.success("Client access added");
  };
  const removeClient = async (id: string) => {
    setBusy(true);
    const { error } = await supabase.from("site_client_access").delete().eq("id", id);
    setBusy(false);
    if (error) return toast.error(error.message);
    refetch(); toast.success("Client access removed");
  };
  return <section className="space-y-5 border-y border-border py-5">
    <h2 className="font-heading text-lg font-semibold">Site work & client access</h2>
    <div className="grid items-end gap-3 sm:grid-cols-3">
      <div className="space-y-2"><Label htmlFor="work-status">Work status</Label><Select value={status} onValueChange={setStatus}><SelectTrigger id="work-status"><SelectValue /></SelectTrigger><SelectContent>{Object.entries(WORK_STATUSES).map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}</SelectContent></Select></div>
      <div className="space-y-2"><Label htmlFor="work-stage">Current stage</Label><Select value={status === "completed" ? "handover" : stage} onValueChange={setStage} disabled={status === "completed"}><SelectTrigger id="work-stage"><SelectValue /></SelectTrigger><SelectContent>{WORK_STAGES.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}</SelectContent></Select></div>
      <Button onClick={save} disabled={busy}><Save size={16} /> Save progress</Button>
    </div>
    <form onSubmit={addClient} className="flex flex-wrap items-end gap-3"><div className="min-w-0 flex-1 space-y-2"><Label htmlFor="client-email">Client sign-in email</Label><Input id="client-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required maxLength={254} /></div><Button type="submit" variant="outline" disabled={busy}><Plus size={16} /> Grant access</Button></form>
    {clients.length > 0 && <ul className="divide-y divide-border">{clients.map((client) => <li key={client.id} className="flex items-center justify-between gap-3 py-2 text-sm"><span className="min-w-0 break-all">{client.client_email}</span><Button variant="ghost" size="icon" disabled={busy} aria-label={`Remove access for ${client.client_email}`} title="Remove access" onClick={() => removeClient(client.id)}><Trash2 size={16} /></Button></li>)}</ul>}
  </section>;
};
