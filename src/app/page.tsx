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
  ArrowRight,
  CheckCircle2,
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
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
  },
  viewport: { once: true, margin: "-50px" },
};

// 语言切换按钮组件
const LanguageToggle = memo(({ uiText }: { uiText: UIText }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center space-x-2 px-3 py-1.5 bg-white/95 backdrop-blur-md border border-gray-200/80 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-sm"
      title={uiText.navigation.switchLanguage}
    >
      <Languages className="w-3.5 h-3.5 text-gray-600" />
      <span className="text-xs font-medium text-gray-700">{language === 'zh' ? 'EN' : '中文'}</span>
    </button>
  );
});
LanguageToggle.displayName = "LanguageToggle";

// 图标映射
const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Database, Brain, Zap, Search, Users, Target, Heart, Shield,
  Cloud, Server, Handshake, Layers, Cpu, Rocket, BarChart, TrendingUp,
  Sparkles, FileText, Bot, CheckCircle2
};

// 主页面组件
export default function HomePage() {
  const { language } = useLanguage();
  const companyData = language === 'zh' ? companyDataZh : (companyDataEn as unknown as CompanyData);
  const uiText = language === 'zh' ? uiTextZh : (uiTextEn as unknown as UIText);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* 顶部导航栏 */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Image
                src="/images/logo.svg"
                alt={companyData.companyInfo.name}
                width={160}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </motion.div>
            
            {/* 联系方式 */}
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center space-x-6 text-sm"
            >
              <a href={`tel:${companyData.contact.phone}`} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-medium">{companyData.contact.phone}</span>
              </a>
              <a href={`mailto:${companyData.contact.email}`} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden lg:inline font-medium">{companyData.contact.email}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      <LanguageToggle uiText={uiText} />
      <ChatModal isOpen={isChatModalOpen} onClose={() => setIsChatModalOpen(false)} />
      <ProjectModal isOpen={isProjectModalOpen} onClose={() => setIsProjectModalOpen(false)} language={language} />
      <FloatingChatButton onClick={() => setIsChatModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-full mb-8">
              <span className="text-sm font-medium text-blue-600">{companyData.companyInfo.tagline}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI增长
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-medium">
              {companyData.companyInfo.slogan}
            </p>
            
            <p className="text-base md:text-lg text-gray-500 mb-12 max-w-4xl mx-auto leading-relaxed">
              {companyData.companyInfo.subtitle}
            </p>

            {companyData.companyInfo.nameDescription && (
              <p className="text-sm md:text-base text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                {companyData.companyInfo.nameDescription}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => setIsChatModalOpen(true)}
                className="px-8 py-6 text-base font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all group"
              >
                <Bot className="w-5 h-5 mr-2" />
                {language === 'zh' ? '开始咨询' : 'Start Consulting'}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setIsProjectModalOpen(true)}
                className="px-8 py-6 text-base font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                {language === 'zh' ? '了解更多' : 'Learn More'}
              </Button>
            </div>
          </motion.div>

          {/* 核心特性 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {companyData.focusAreas.map((area, index) => {
              const Icon = iconMap[area.icon] || TrendingUp;
              return (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" style={{ color: area.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 核心技术底座 */}
      {companyData.coreTechStack && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyData.coreTechStack.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {companyData.coreTechStack.subtitle}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companyData.coreTechStack.pillars.map((pillar, index) => {
                const Icon = iconMap[pillar.icon] || Database;
                return (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" style={{ color: pillar.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.name}</h3>
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
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyData.coreModules.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {companyData.coreModules.subtitle}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyData.coreModules.modules.map((module, index) => {
                const Icon = iconMap[module.icon] || Search;
                return (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.05 }}
                    className="p-6 rounded-xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" style={{ color: module.color }} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{module.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 系统架构 */}
      {companyData.systemArchitecture && (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyData.systemArchitecture.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {companyData.systemArchitecture.subtitle}
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {companyData.systemArchitecture.layers.map((layer, index) => {
                const Icon = iconMap[layer.icon] || Layers;
                return (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white border-l-4 hover:shadow-lg transition-all"
                    style={{ borderLeftColor: layer.color }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: layer.color + '15' }}>
                        <Icon className="w-6 h-6" style={{ color: layer.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">{layer.level}</span>
                          <h3 className="text-xl font-bold text-gray-900">{layer.name}</h3>
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
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyData.serviceSystem.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {companyData.serviceSystem.subtitle}
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {companyData.serviceSystem.tracks.map((track, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {track.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{track.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{track.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {track.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
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
        <section className="py-20 px-6 bg-gray-50">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyData.deliveryModes.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {companyData.deliveryModes.subtitle}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {companyData.deliveryModes.modes.map((mode, index) => {
                const Icon = iconMap[mode.icon] || Cloud;
                return (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7" style={{ color: mode.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{mode.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{mode.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {companyData.deliveryModes.serviceForms && (
              <div className="space-y-4">
                {companyData.deliveryModes.serviceForms.map((form, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-white border border-gray-100"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{form.name}</h4>
                    <p className="text-sm text-gray-600 mb-2"><strong>适合：</strong>{form.suitable}</p>
                    <p className="text-sm text-gray-600"><strong>交付内容：</strong>{form.delivery}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* 适用场景与价值产出 */}
      {companyData.applicableScenarios && (
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {companyData.applicableScenarios.title}
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-white border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">适用场景</h3>
                <ul className="space-y-3">
                  {companyData.applicableScenarios.scenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div {...fadeInUp} className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{companyData.applicableScenarios.valueOutput.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {companyData.applicableScenarios.valueOutput.metrics.map((metric, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white text-center border border-blue-100">
                      <p className="text-sm font-bold text-blue-600">{metric}</p>
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
      <footer className="py-16 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">{companyData.companyInfo.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{companyData.companyInfo.slogan}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">联系方式</h4>
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
                <p className="text-gray-500">{companyData.contact.address}</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">服务</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {companyData.contact.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {companyData.companyInfo.name}. {language === 'zh' ? '版权所有' : 'All rights reserved.'}</p>
            <p className="mt-2 text-xs">{companyData.companyInfo.focus}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
