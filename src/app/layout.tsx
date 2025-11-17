import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// 配置 Inter 字体 - 优化加载
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "UUMI 悠悠米科技 - 让智能带来全新视界",
  description: "四川悠悠米科技有限公司专注于AI技术深度应用，为医疗健康、电力工程、智能设计、政务公文等领域提供智能化解决方案，助力政企客户实现智能化转型。",
  keywords: ["AI", "人工智能", "智能化转型", "医疗AI", "电力AI", "智能设计", "政务数字化", "悠悠米", "UUMI"],
  authors: [{ name: "UUMI Technology" }],
  icons: {
    icon: "/uumi-logo.png",
    shortcut: "/uumi-logo.png",
    apple: "/uumi-logo.png",
  },
  openGraph: {
    title: "UUMI 悠悠米科技 - 让智能带来全新视界",
    description: "专注AI技术深度应用，助力政企客户智能化转型",
    url: "https://www.uumi.net",
    siteName: "UUMI 悠悠米科技",
    locale: "zh_CN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 优化加载性能 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8B5CF6" />
        {/* DNS 预连接 */}
        <link rel="dns-prefetch" href="https://www.uumi.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  );
}
