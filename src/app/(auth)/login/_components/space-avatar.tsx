import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

import type { Space } from "../_data/spaces";

interface SpaceAvatarProps {
  space: Pick<Space, "initials" | "color">;
  className?: string;
}

export function SpaceAvatar({ space, className }: SpaceAvatarProps) {
  return (
    <Avatar
      size="lg"
      className={cn("rounded-xl", className)}
      style={{
        backgroundColor: space.color + "20",
        color: space.color,
      }}
    >
      <AvatarFallback className="rounded-xl bg-transparent text-pn-sm font-bold text-inherit">
        {space.initials}
      </AvatarFallback>
    </Avatar>
  );
}
