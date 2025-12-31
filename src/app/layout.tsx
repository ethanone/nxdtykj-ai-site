import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "成都你行的体育科技有限公司 - AI+商业增长一体化解决方案 | 数据驱动业绩增长",
  description: "面向全行业企业的AI+商业增长一体化解决方案，依托前沿人工智能技术与全链路商业数据洞察，精准定位企业业绩增长瓶颈，提供从增长诊断、策略生成、执行落地到效果迭代、陪跑拿结果等的全流程智能化服务。",
  keywords: ["AI增长", "商业增长", "数据驱动", "增长诊断", "策略生成", "执行落地", "AI商业增长", "企业增长", "业绩增长", "成都企业服务"],
  authors: [{ name: "成都你行的体育科技有限公司" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "成都你行的体育科技有限公司 - AI+商业增长一体化解决方案",
    description: "AI+商业增长 | 数据驱动 | 增长诊断 | 策略生成 | 执行落地 | 陪跑拿结果",
    url: "https://www.aizengzhang.work",
    siteName: "成都你行的体育科技有限公司",
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
        <meta name="theme-color" content="#2563EB" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* DNS 预连接 - 性能优化 */}
        <link rel="dns-prefetch" href="https://www.aizengzhang.work" />
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
