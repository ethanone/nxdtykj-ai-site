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
  Search,
  Users,
  Target,
  Heart,
  Shield,
  Cloud,
  Server,
  Handshake,
  Layers,
  Cpu,
  Rocket,
  BarChart,
  Phone,
  Mail,
  Sparkles,
  FileText,
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

// 图标映射
const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Database, Brain, Zap, Search, Users, Target, Heart, Shield,
  Cloud, Server, Handshake, Layers, Cpu, Rocket, BarChart, TrendingUp,
  Sparkles, FileText, Bot
};

// 主页面组件
export default function HomePage() {
  const { language } = useLanguage();
  const companyData = language === 'zh' ? companyDataZh : (companyDataEn as unknown as CompanyData);
  const uiText = language === 'zh' ? uiTextZh : (uiTextEn as unknown as UIText);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white">
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
              <div className="relative h-10 sm:h-12 md:h-14 w-auto">
                <Image
                  src="/images/logo.svg"
                  alt={companyData.companyInfo.name}
                  width={180}
                  height={50}
                  className="object-contain h-full w-auto"
                  priority
                  sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
                />
              </div>
            </motion.div>
            {/* 联系方式 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hidden md:flex items-center space-x-4 text-sm"
            >
              <a href={`tel:${companyData.contact.phone}`} className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>{companyData.contact.phone}</span>
              </a>
              <a href={`mailto:${companyData.contact.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors">
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
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-32 sm:pt-40 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
        <div className="container mx-auto max-w-6xl text-center">
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
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                AI增长
              </span>
            </motion.h1>

            {/* 副标题 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-10 font-semibold"
            >
              {companyData.companyInfo.slogan}
            </motion.p>

            {/* 描述 */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed"
            >
              {companyData.companyInfo.subtitle}
            </motion.p>

            {/* 公司介绍 */}
            {companyData.companyInfo.nameDescription && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-base sm:text-lg text-gray-700 mb-16 max-w-5xl mx-auto leading-relaxed"
              >
                {companyData.companyInfo.nameDescription}
              </motion.p>
            )}

            {/* CTA 按钮 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <Button 
                size="lg" 
                onClick={() => setIsChatModalOpen(true)}
                className="px-12 py-7 text-lg font-semibold tracking-wide w-full sm:w-auto min-h-[64px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all"
              >
                <Bot className="w-6 h-6 mr-3" />
                {language === 'zh' ? '开始咨询' : 'Start Consulting'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsProjectModalOpen(true)}
                className="px-12 py-7 text-lg font-semibold tracking-wide w-full sm:w-auto min-h-[64px] border-2 border-gray-300 hover:border-primary"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
              </Button>
            </motion.div>

            {/* 特性卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {companyData.focusAreas.map((area, index) => {
                const Icon = iconMap[area.icon] || TrendingUp;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      style={{ backgroundColor: area.color + '15' }}
                    >
                      <Icon className="w-8 h-8" style={{ color: area.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 text-base text-center leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 核心技术底座 */}
      {companyData.coreTechStack && (
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {companyData.coreTechStack.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.coreTechStack.subtitle}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyData.coreTechStack.pillars.map((pillar, index) => {
                const Icon = iconMap[pillar.icon] || Database;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200"
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: pillar.color + '15' }}>
                      <Icon className="w-8 h-8" style={{ color: pillar.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 核心功能模块 */}
      {companyData.coreModules && (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {companyData.coreModules.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.coreModules.subtitle}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyData.coreModules.modules.map((module, index) => {
                const Icon = iconMap[module.icon] || Search;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: module.color + '15' }}>
                      <Icon className="w-6 h-6" style={{ color: module.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{module.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 系统架构 */}
      {companyData.systemArchitecture && (
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {companyData.systemArchitecture.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.systemArchitecture.subtitle}
              </p>
            </motion.div>
            <div className="space-y-6">
              {companyData.systemArchitecture.layers.map((layer, index) => {
                const Icon = iconMap[layer.icon] || Layers;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-l-4"
                    style={{ borderLeftColor: layer.color }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: layer.color + '15' }}>
                        <Icon className="w-6 h-6" style={{ color: layer.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-semibold text-gray-500">{layer.level}</span>
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

      {/* 服务体系 */}
      {companyData.serviceSystem && (
        <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {companyData.serviceSystem.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.serviceSystem.subtitle}
              </p>
            </motion.div>
            <div className="space-y-12">
              {companyData.serviceSystem.tracks.map((track, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {track.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{track.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{track.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {track.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-50 rounded-xl p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 交付模式 */}
      {companyData.deliveryModes && (
        <section className="py-24 px-4 bg-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {companyData.deliveryModes.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {companyData.deliveryModes.subtitle}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {companyData.deliveryModes.modes.map((mode, index) => {
                const Icon = iconMap[mode.icon] || Cloud;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: mode.color + '15' }}>
                      <Icon className="w-8 h-8" style={{ color: mode.color }} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{mode.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{mode.description}</p>
                  </motion.div>
                );
              })}
            </div>
            {companyData.deliveryModes.serviceForms && (
              <div className="space-y-6">
                {companyData.deliveryModes.serviceForms.map((form, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{form.name}</h4>
                    <p className="text-gray-600 mb-2"><strong>适合：</strong>{form.suitable}</p>
                    <p className="text-gray-600"><strong>交付内容：</strong>{form.delivery}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 适用场景与价值产出 */}
      {companyData.applicableScenarios && (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {companyData.applicableScenarios.title}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">适用场景</h3>
                <ul className="space-y-4">
                  {companyData.applicableScenarios.scenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeInUp} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{companyData.applicableScenarios.valueOutput.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {companyData.applicableScenarios.valueOutput.metrics.map((metric, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 text-center">
                      <p className="text-lg font-bold text-blue-600">{metric}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 font-semibold text-center">
                  {companyData.applicableScenarios.valueOutput.outcome}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{companyData.companyInfo.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{companyData.companyInfo.slogan}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">联系方式</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${companyData.contact.phone}`} className="hover:text-white transition-colors">
                    {companyData.contact.phone}
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                    {companyData.contact.email}
                  </a>
                </p>
                <p>{companyData.contact.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">服务</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {companyData.contact.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
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
