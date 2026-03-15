"use client";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState, type ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SpaceAvatar } from "./space-avatar";
import { SpaceBadge } from "./space-badge";

import type { Space } from "../_data/spaces";

type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

interface StepPasswordProps {
  email: string;
  space: Space;
  password: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: FormSubmitHandler;
}

export function StepPassword({
  email,
  space,
  password,
  loading,
  onChange,
  onSubmit,
}: StepPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-display text-pn-fg text-pn-title font-semibold tracking-tight mb-1.5">
        Enter your password
      </h2>
      <p className="text-pn-fg-muted text-sm mb-6">
        {"Signing into "}
        <span className="text-pn-fg font-medium">{space.name}</span>.
      </p>

      <Card className="mb-6 gap-0 border-pn-border bg-pn-surface py-0 shadow-none">
        <CardContent className="flex items-center gap-3 p-3.5">
          <SpaceAvatar space={space} className="size-8 rounded-lg text-pn-label" />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-pn-fg">{space.name}</div>
            <div className="truncate text-xs text-pn-fg-dim">{email}</div>
          </div>
          <SpaceBadge type={space.type} />
        </CardContent>
      </Card>

      <div className="flex flex-col gap-1.5 mb-2.5">
        <Label
          htmlFor="password"
          className="text-pn-label text-pn-fg-dim uppercase tracking-widest"
        >
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => onChange(e.target.value)}
            placeholder="••••••••••••"
            required
            autoFocus
            className="bg-pn-surface border-pn-border text-pn-fg placeholder:text-pn-fg-ghost focus-visible:border-pn-brand/50 focus-visible:ring-pn-brand/10 rounded-xl py-3 h-auto pr-12"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-pn-fg-ghost hover:text-pn-fg-muted hover:bg-transparent"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </Button>
        </div>
      </div>

      <div className="flex justify-end mb-6">
        <a href="#" className="text-xs text-pn-brand hover:text-pn-brand-hover transition-colors">
          Forgot password?
        </a>
      </div>

      <Button
        type="submit"
        disabled={loading || !password.trim()}
        className="w-full bg-pn-brand hover:bg-pn-brand-hover active:bg-pn-brand-active text-white rounded-xl py-3 h-auto shadow-lg shadow-pn-brand/20"
      >
        {loading ? (
          <>
            <Loader2 data-icon="inline-start" className="animate-spin" />
            Signing in…
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
