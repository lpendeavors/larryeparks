import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Larry Parks",
    default:
      "Larry Parks | Full-Stack Developer & Mobile App Specialist | Flutter, React, .NET",
  },
  description:
    "Discover Larry Parks’ portfolio showcasing 7+ years of experience as a Full-Stack Developer and Mobile App Specialist. Explore projects built with Flutter, React, and .NET, demonstrating expertise in scalable web and mobile applications, cloud solutions, and DevOps practices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
