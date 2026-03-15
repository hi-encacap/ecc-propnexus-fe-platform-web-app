"use client";

import { ArrowLeft } from "lucide-react";
import { useState, type ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { BrandPanel } from "./brand-panel";
import { StepEmail } from "./step-email";
import { StepPassword } from "./step-password";
import { StepSpaceSelect } from "./step-space-select";
import { MOCK_SPACES, type Space } from "../_data/spaces";

type FormSubmitHandler = NonNullable<ComponentProps<"form">["onSubmit"]>;

type Step = "email" | "space" | "password";

const STEP_ORDER: Step[] = ["email", "space", "password"];

function getStepWidth(i: number, currentStepIndex: number): string {
  if (i === currentStepIndex) return "w-6 bg-pn-brand";
  if (i < currentStepIndex) return "w-4 bg-pn-brand/35";
  return "w-4 bg-pn-border";
}

export default function LoginForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);
  const [loading, setLoading] = useState(false);
  const [stepKey, setStepKey] = useState(0);

  const advanceTo = (next: Step) => {
    setStepKey((k) => k + 1);
    setStep(next);
  };

  const handleContinue: FormSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    advanceTo("space");
  };

  const handleSpaceSelect = (space: Space) => {
    setSelectedSpace(space);
    setTimeout(() => advanceTo("password"), 250);
  };

  const handleSignIn: FormSubmitHandler = async (event) => {
    event.preventDefault();
    if (!password.trim() || !selectedSpace) return;
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
  };

  const goBack = () => {
    if (step === "password") {
      setSelectedSpace(null);
      setPassword("");
      advanceTo("space");
    } else if (step === "space") {
      advanceTo("email");
    }
  };

  const currentStepIndex = STEP_ORDER.indexOf(step);

  return (
    <div className="min-h-screen flex bg-pn-base font-body">
      <BrandPanel />

      <main className="flex-1 flex items-center justify-center bg-pn-surface p-8 lg:p-16">
        <div className="w-full max-w-pn-form">
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="size-8 rounded-xl bg-pn-brand flex items-center justify-center shadow-md shadow-pn-brand/30">
              <span className="font-display text-white font-bold text-xs">PN</span>
            </div>
            <span className="font-display text-pn-fg font-semibold tracking-tight">PropNexus</span>
          </div>

          <Card className="rounded-2xl border-white/6 bg-pn-card py-0 shadow-2xl shadow-black/40">
            <CardContent className="p-8">
              <div className="mb-8 flex items-center gap-1.5">
                {STEP_ORDER.map((s, i) => (
                  <div
                    key={s}
                    className={[
                      "h-pn-bar rounded-full transition-all duration-500",
                      getStepWidth(i, currentStepIndex),
                    ].join(" ")}
                  />
                ))}
              </div>

              <div key={stepKey} className="animate-fade-slide-up">
                {step !== "email" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goBack}
                    className="mb-6 px-0 text-pn-fg-muted hover:bg-transparent hover:text-pn-fg group"
                  >
                    <ArrowLeft
                      data-icon="inline-start"
                      className="transition-transform group-hover:-translate-x-0.5"
                    />
                    Back
                  </Button>
                )}

                {step === "email" && (
                  <StepEmail
                    email={email}
                    loading={loading}
                    onChange={setEmail}
                    onSubmit={handleContinue}
                  />
                )}

                {step === "space" && (
                  <StepSpaceSelect
                    email={email}
                    spaces={MOCK_SPACES}
                    onSelect={handleSpaceSelect}
                  />
                )}

                {step === "password" && selectedSpace && (
                  <StepPassword
                    email={email}
                    space={selectedSpace}
                    password={password}
                    loading={loading}
                    onChange={setPassword}
                    onSubmit={handleSignIn}
                  />
                )}
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-pn-fg-faint text-xs mt-6">
            © 2026 PropNexus. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
