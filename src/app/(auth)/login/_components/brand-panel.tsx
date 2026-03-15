import { Building2, Globe, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: ShieldCheck, label: "Manage listings across all your properties" },
  { icon: Globe, label: "Publish and approve content in one place" },
  { icon: Building2, label: "Full visibility across every tenant workspace" },
];

export function BrandPanel() {
  return (
    <aside className="hidden lg:flex lg:w-pn-aside xl:w-pn-aside-xl relative flex-col justify-between p-14 overflow-hidden">
      <div
        className="absolute inset-0 opacity-pn-dots"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute top-20 right-12 size-72 rounded-full border border-pn-brand/10 pointer-events-none" />
      <div className="absolute top-32 right-24 size-48 rounded-full border border-pn-brand/8 pointer-events-none" />
      <div className="absolute bottom-24 -left-20 size-pn-ring rounded-full border border-white/3 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 size-80 rounded-full bg-pn-brand/6 blur-pn-glow pointer-events-none" />
      <div className="absolute top-1/3 right-0 size-64 rounded-full bg-pn-tenant/5 blur-pn-glow pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-pn-brand flex items-center justify-center shadow-lg shadow-pn-brand/30">
            <Building2 size={17} className="text-white" />
          </div>
          <span className="font-display text-pn-fg font-semibold text-lg tracking-tight">
            PropNexus
          </span>
        </div>
      </div>

      <div className="relative z-10">
        <p className="text-pn-brand text-xs font-semibold tracking-pn-brand uppercase mb-5 font-display">
          Admin Console
        </p>
        <h1 className="font-display text-pn-display xl:text-5xl font-semibold text-pn-fg leading-pn-tight tracking-tight mb-5">
          One platform.
          <br />
          Every space,
          <br />
          controlled.
        </h1>
        <p className="text-pn-fg-muted text-pn-body leading-relaxed max-w-pn-desc">
          Manage listings, content, tenants, and users from a single unified admin console.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-3.5">
        {FEATURES.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="size-7 rounded-lg bg-pn-brand/10 flex items-center justify-center flex-shrink-0">
              <Icon size={13} className="text-pn-brand" />
            </div>
            <span className="text-pn-fg-muted text-sm">{label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
