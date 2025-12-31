"use client";

import { memo, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChatModal } from "@/components/ChatModal";
import { FloatingChatButton } from "@/components/FloatingChatButton";
import { ProjectModal } from "@/components/ProjectModal";
import { motion } from "framer-motion";
import {
  Languages,
  Bot,
  Zap,
  TrendingUp,
  Database,
  Brain,
  Rocket,
  BarChart,
  Layers,
  Cpu,
  Search,
  Users,
  Target,
  Heart,
  Shield,
  Cloud,
  Server,
  Handshake,
  Phone,
  Mail,
} from "lucide-react";
import companyDataZh from "@/data/companyData.json";
import companyDataEn from "@/data/companyData.en.json";
import uiTextZh from "@/data/uiText.json";
import uiTextEn from "@/data/uiText.en.json";

// 定义类型
type CompanyData = typeof companyDataZh;
type UIText = typeof uiTextZh;

// 优化的动画配置
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
  },
  viewport: { once: true, margin: "0px" },
};

// 语言切换按钮组件
const LanguageToggle = memo(({ uiText }: { uiText: UIText }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      title={uiText.navigation.switchLanguage}
    >
      <Languages className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-gray-700">{language === 'zh' ? 'EN' : '中文'}</span>
    </button>
  );
});
LanguageToggle.displayName = "LanguageToggle";

// 主页面组件
export default function HomePage() {
  const { language } = useLanguage();
  const companyData = language === 'zh' ? companyDataZh : (companyDataEn as unknown as CompanyData);
  const uiText = language === 'zh' ? uiTextZh : (uiTextEn as unknown as UIText);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // 图标映射
  const iconMap: Record<string, any> = {
    Database, Brain, Zap, Rocket, BarChart, Layers, Cpu,
    Search, Users, Target, Heart, Shield, Cloud, Server, Handshake
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50/50 to-white">
      {/* 顶部导航栏 - Logo在左上角 */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - 左上角 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center"
            >
              <div className="relative h-12 sm:h-14 md:h-16 w-auto">
                <Image
                  src="/images/logo.svg"
                  alt="成都你行的体育科技有限公司"
                  width={260}
                  height={75}
                  className="object-contain h-full w-auto"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 260px"
                />
              </div>
            </motion.div>
            {/* 联系方式 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center gap-4 text-sm"
            >
              <a href={`tel:${companyData.contact.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>{companyData.contact.phone}</span>
              </a>
              <a href={`mailto:${companyData.contact.email}`} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden lg:inline">{companyData.contact.email}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      <LanguageToggle uiText={uiText} />
      
      {/* 聊天模态框 */}
      <ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
      
      {/* 项目简介模态框 */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} language={language} />
      
      {/* 浮动聊天按钮 */}
      <FloatingChatButton onClick={() => setIsChatModalOpen(true)} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 sm:pt-40 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div {...fadeInUp}>
            {/* 标签 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 mb-8"
            >
              <span className="text-base sm:text-lg text-gray-500 tracking-wider font-light">
                {companyData.companyInfo.tagline}
              </span>
            </motion.div>

            {/* 主标题 */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                AI增长
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-700 mb-10 font-medium"
            >
              {companyData.companyInfo.slogan}
            </motion.p>

            {/* 描述 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
            >
              {companyData.companyInfo.subtitle}
            </motion.p>

            {/* CTA 按钮 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <Button 
                size="lg" 
                onClick={() => setIsChatModalOpen(true)}
                className="cta-button px-12 py-7 text-lg font-semibold tracking-wide w-full sm:w-auto min-h-[64px] shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Bot className="w-6 h-6 mr-3" />
                {language === 'zh' ? '开始咨询' : 'Start Consulting'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsProjectModalOpen(true)}
                className="secondary-button px-12 py-7 text-lg font-semibold tracking-wide w-full sm:w-auto min-h-[64px] border-2 hover:bg-gray-50"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
              </Button>
            </motion.div>

            {/* 特性卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {companyData.coreAdvantages.map((advantage: any, index: number) => {
                const IconComponent = iconMap[advantage.icon] || TrendingUp;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: advantage.color + '15' }}
                    >
                      <IconComponent className="w-8 h-8" style={{ color: advantage.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-base text-center leading-relaxed">
                      {advantage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心技术底座 Section */}
      {companyData.coreTechStack && (
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {companyData.coreTechStack.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.coreTechStack.subtitle}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {companyData.coreTechStack.pillars.map((pillar: any, index: number) => {
                const IconComponent = iconMap[pillar.icon] || Database;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: pillar.color + '15' }}>
                      <IconComponent className="w-7 h-7" style={{ color: pillar.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ color: pillar.color }}>
                      {pillar.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 四层系统架构 Section */}
      {companyData.systemArchitecture && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {companyData.systemArchitecture.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.systemArchitecture.subtitle}
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {companyData.systemArchitecture.layers.map((layer: any, index: number) => {
                const IconComponent = iconMap[layer.icon] || Layers;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-primary/30 group"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: layer.color + '15' }}>
                          <IconComponent className="w-8 h-8" style={{ color: layer.color }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-4 py-1 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: layer.color }}>
                            {layer.level}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{layer.name}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{layer.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 价值产出 Section */}
      {companyData.applicableScenarios && (
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {companyData.applicableScenarios.title}
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div {...fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'zh' ? '适用场景' : 'Applicable Scenarios'}
                </h3>
                <ul className="space-y-4">
                  {companyData.applicableScenarios.scenarios.map((scenario: string, idx: number) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span>{scenario}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div {...fadeInUp} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg border-2 border-primary/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {companyData.applicableScenarios.valueOutput.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {companyData.applicableScenarios.valueOutput.metrics.map((metric: string, idx: number) => (
                    <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm">
                      <p className="text-sm font-bold text-primary">{metric}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-center font-medium">
                  {companyData.applicableScenarios.valueOutput.outcome}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{companyData.companyInfo.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {companyData.companyInfo.subtitle}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{language === 'zh' ? '联系方式' : 'Contact'}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${companyData.contact.phone}`} className="hover:text-white transition-colors">
                    {companyData.contact.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                    {companyData.contact.email}
                  </a>
                </p>
                <p>{companyData.contact.address}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{language === 'zh' ? '服务时间' : 'Working Hours'}</h3>
              <p className="text-sm text-gray-400">{companyData.contact.workingHours}</p>
              <p className="text-sm text-gray-400 mt-2">{companyData.contact.responseTime}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {companyData.companyInfo.name}. {language === 'zh' ? '版权所有' : 'All rights reserved.'}</p>
            <p className="mt-2">{companyData.companyInfo.focus}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
