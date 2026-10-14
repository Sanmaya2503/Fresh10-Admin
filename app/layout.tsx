import type { Metadata } from "next";
import { AppProviders } from "@/components/app-providers";
import { AppShell } from "@/components/app-shell";
import "@/styles.css";

export const metadata: Metadata = {
  title: "fresh15 Admin",
  description: "fresh15 platform overview, orders, customers, partners, inventory and payments.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>
          <AppShell>{children}</AppShell>
        </AppProviders>
      </body>
    </html>
  );
}
