import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import type { Space } from "../_data/spaces";

interface SpaceBadgeProps {
  type: Space["type"];
  className?: string;
}

export function SpaceBadge({ type, className }: SpaceBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "rounded-md border-0 px-1.5 py-0.5 text-pn-badge font-semibold shadow-none",
        type === "platform" ? "bg-pn-brand/15 text-pn-brand" : "bg-pn-tenant/15 text-pn-tenant",
        className,
      )}
    >
      {type === "platform" ? "Platform" : "Tenant"}
    </Badge>
  );
}
