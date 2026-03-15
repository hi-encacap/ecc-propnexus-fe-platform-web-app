"use client";

import { ChevronRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import type { ComponentProps } from "react";

type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

interface StepEmailProps {
  email: string;
  loading: boolean;
  onChange: (value: string) => void;
  onSubmit: FormSubmitHandler;
}

export function StepEmail({ email, loading, onChange, onSubmit }: StepEmailProps) {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-display text-pn-fg text-pn-title font-semibold tracking-tight mb-1.5">
        Welcome back
      </h2>
      <p className="text-pn-fg-muted text-sm mb-7">Enter your email to discover your workspaces.</p>

      <div className="flex flex-col gap-1.5 mb-5">
        <Label htmlFor="email" className="text-pn-label text-pn-fg-dim uppercase tracking-widest">
          Email address
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => onChange(e.target.value)}
          placeholder="you@example.com"
          required
          autoFocus
          className="bg-pn-surface border-pn-border text-pn-fg placeholder:text-pn-fg-ghost focus-visible:border-pn-brand/50 focus-visible:ring-pn-brand/10 rounded-xl py-3 h-auto"
        />
      </div>

      <Button
        type="submit"
        disabled={loading || !email.trim()}
        className="w-full bg-pn-brand hover:bg-pn-brand-hover active:bg-pn-brand-active text-white rounded-xl py-3 h-auto shadow-lg shadow-pn-brand/20 group"
      >
        {loading ? (
          <>
            <Loader2 data-icon="inline-start" className="animate-spin" />
            Finding your spaces…
          </>
        ) : (
          <>
            Continue
            <ChevronRight
              data-icon="inline-end"
              className="transition-transform group-hover:translate-x-0.5"
            />
          </>
        )}
      </Button>
    </form>
  );
}
