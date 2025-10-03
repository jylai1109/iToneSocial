import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { AlertDialogProvider } from "@/hooks/use-alert-dialog";
import { ConfirmDialogProvider } from "@/hooks/use-confirm-dialog";
import "./globals.css";

/* export const metadata: Metadata = {
  title: "iTone - 找到你的旅行調調",
  description: "找到你的旅行調調，遇見對味的旅伴 - iTone 旅行社交平台",
  generator: "iTone",
} */

export const metadata: Metadata = {
  title: "PMIS",
  description: "管理所有工程專案，請選擇專案。",
  generator: "PMIS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <AlertDialogProvider>
          <ConfirmDialogProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
            <Toaster /> {/* 👈 這裡一定要加，toast 才會出現 */}
          </ConfirmDialogProvider>
        </AlertDialogProvider>
      </body>
    </html>
  );
}
