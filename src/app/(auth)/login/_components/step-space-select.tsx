"use client";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { SpaceAvatar } from "./space-avatar";
import { SpaceBadge } from "./space-badge";

import type { Space } from "../_data/spaces";

interface StepSpaceSelectProps {
  email: string;
  spaces: Space[];
  onSelect: (space: Space) => void;
}

export function StepSpaceSelect({ email, spaces, onSelect }: StepSpaceSelectProps) {
  return (
    <div>
      <h2 className="font-display text-pn-fg text-pn-title font-semibold tracking-tight mb-1.5">
        Choose a workspace
      </h2>
      <p className="text-pn-fg-muted text-sm mb-6">
        <span className="text-pn-fg">{email}</span>
        {" has access to "}
        {spaces.length}
        {" workspace"}
        {spaces.length !== 1 ? "s" : ""}.
      </p>

      <div className="flex flex-col gap-2">
        {spaces.map((space) => (
          <Button
            key={space.id}
            type="button"
            variant="outline"
            onClick={() => onSelect(space)}
            className="h-auto w-full justify-start gap-3.5 rounded-xl border-pn-border bg-pn-surface px-4 py-4 text-left hover:border-pn-brand/40 hover:bg-pn-card-hover"
          >
            <SpaceAvatar
              space={space}
              className="size-10 transition-transform group-hover:scale-105"
            />

            <div className="min-w-0 flex-1">
              <div className="mb-0.5 flex items-center gap-2">
                <span className="text-pn-fg text-sm font-medium truncate">{space.name}</span>
                <SpaceBadge type={space.type} />
              </div>
              <span className="text-pn-fg-dim text-xs">{space.description}</span>
            </div>

            <ChevronRight
              data-icon="inline-end"
              className="shrink-0 text-pn-fg-ghost transition-colors group-hover:text-pn-brand"
            />
          </Button>
        ))}
      </div>
    </div>
  );
}
