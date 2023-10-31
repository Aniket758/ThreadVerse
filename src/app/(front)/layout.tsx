import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import CustomProvider from "../providers";
import BaseComponent from "@/components/base/BaseComponent";

export const metadata: Metadata = {
  title: "Threads App",
  description: "The Threads app to share your thoughts and much more.",

  openGraph: {
    title: "Title webtsite",
    description: "this is the desciption",
    images: "url/image.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@eMartiiin94",
    title: "Title webtsite",
    description: "this is the desciption",
    images: "url/image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BaseComponent>{children}</BaseComponent>
        <Toaster />
      </ThemeProvider>
    </CustomProvider>
  );
}
