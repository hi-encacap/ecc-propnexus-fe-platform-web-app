import LoginForm from "./_components/login-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — PropNexus",
  description: "Sign in to the PropNexus Admin Console",
};

export default function LoginPage() {
  return <LoginForm />;
}
