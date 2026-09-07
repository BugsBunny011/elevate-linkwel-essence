import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import QRCode from "qrcode";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { NoIndex, LiftPassShell } from "@/components/liftpass/LiftPassChrome";
import { Button } from "@/components/ui/button";
import type { Site } from "@/lib/liftpass";

const AdminQr = () => {
  const { data: sites = [] } = useQuery({
    queryKey: ["liftpass-qr-sites"],
    queryFn: async () => {
      const { data } = await supabase.from("sites").select("*").order("name");
      return (data ?? []) as Site[];
    },
  });

  const [siteId, setSiteId] = useState("");
  const [png, setPng] = useState("");
  const site = sites.find((s) => s.id === siteId);
  const url = site ? `${window.location.origin}/liftpass/${site.site_code}` : "";

  useEffect(() => {
    if (!url) return setPng("");
    QRCode.toDataURL(url, { width: 900, margin: 1, errorCorrectionLevel: "H" }).then(setPng);
  }, [url]);

  useEffect(() => {
    if (!siteId && sites.length) setSiteId(sites[0].id);
  }, [sites, siteId]);

  return (
    <LiftPassShell>
      <NoIndex title="LiftPass QR codes" />
      <main className="mx-auto max-w-3xl space-y-6 px-4 py-6">
        <div>
          <Link to="/admin" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft size={14} /> Admin dashboard
          </Link>
          <h1 className="font-heading text-2xl font-semibold">Site QR codes</h1>
          <p className="text-sm text-muted-foreground">
            One tag per site, mounted at the entrance, lobby or security desk. It covers every lift there.
          </p>
        </div>

        <select
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
          className="h-10 w-full max-w-sm rounded-md border border-input bg-background px-3 text-sm"
        >
          {sites.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.site_code})
            </option>
          ))}
        </select>

        {site && png && (
          <>
            <div id="qr-print" className="mx-auto w-full max-w-sm rounded-xl border border-border bg-card p-8 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Linkwel LiftPass</p>
              <h2 className="mt-1 font-heading text-xl font-semibold">{site.name}</h2>
              <p className="text-xs text-muted-foreground">{site.address}</p>
              <img src={png} alt={`QR code for ${site.name}`} className="mx-auto my-5 w-56" />
              <p className="text-sm font-medium">Scan for live lift status</p>
              <p className="mt-1 text-xs text-muted-foreground">Site code {site.site_code}</p>
            </div>

            <div className="flex justify-center gap-3">
              <Button asChild>
                <a href={png} download={`liftpass-${site.site_code}.png`}>
                  <Download size={14} /> Download PNG
                </a>
              </Button>
              <Button variant="outline" onClick={() => window.print()}>
                <Printer size={14} /> Print
              </Button>
            </div>
            <p className="text-center text-xs text-muted-foreground">Links to {url}</p>
          </>
        )}
      </main>
    </LiftPassShell>
  );
};

export default AdminQr;
