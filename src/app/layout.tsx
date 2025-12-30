import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "海南汇融未来有限公司 - 专业企业一站式服务 | 自贸区财税咨询",
  description: "海南汇融未来有限公司提供专业的企业一站式服务，包括财税咨询、工商注册、税务筹划、财务代理等服务。深耕海南自贸区，助力企业合规经营、降本增效。",
  keywords: ["海南汇融未来", "企业一站式服务", "财税咨询", "工商注册", "税务筹划", "财务代理", "海南自贸区", "企业服务", "财税服务", "海口企业服务"],
  authors: [{ name: "海南汇融未来有限公司" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "海南汇融未来有限公司 - 专业企业一站式服务",
    description: "企业一站式服务 | 财税咨询 | 工商注册 | 税务筹划 | 财务代理 | 海南自贸区",
    url: "https://www.hrwl-ai.com",
    siteName: "海南汇融未来有限公司",
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
        {/* 移动端视口优化 - 防止缩放和布局问题 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#8B2F2F" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.hrwl-ai.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
