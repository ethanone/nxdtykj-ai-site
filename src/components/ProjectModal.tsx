"use client";

import { memo, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import companyDataZh from "@/data/companyData.json";
import companyDataEn from "@/data/companyData.en.json";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'zh' | 'en';
}

export const ProjectModal = memo(({ isOpen, onClose, language }: ProjectModalProps) => {
  const companyData = language === 'zh' ? companyDataZh : companyDataEn;

  // 阻止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ESC 键关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* 模态框 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-[10%] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h2 className="text-xl font-semibold text-gray-900">
                {language === 'zh' ? 'AI商业增长系统详情' : 'AI Business Growth System Details'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/50 rounded-full transition-colors"
                aria-label={language === 'zh' ? '关闭' : 'Close'}
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* 内容区域 - 可滚动 */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 md:py-8">
              <div className="space-y-10 max-w-4xl mx-auto">
                
                {/* 公司简介 */}
                <section>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {language === 'zh' ? '关于我们' : 'About Us'}
                  </h3>
                  <div className="space-y-3 text-base text-gray-700 leading-relaxed">
                    {companyData.aboutUs.intro.map((text: string, idx: number) => (
                      <p key={idx}>{text}</p>
                    ))}
                  </div>
                </section>

                {/* 核心技术底座 */}
                {companyData.coreTechStack && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {companyData.coreTechStack.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{companyData.coreTechStack.subtitle}</p>
                    <div className="grid gap-4">
                      {companyData.coreTechStack.pillars.map((pillar: { name: string; description: string; icon: string; color: string }, idx: number) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                          <h4 className="text-lg font-semibold mb-2" style={{ color: pillar.color }}>
                            {pillar.name}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{pillar.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 四层系统架构 */}
                {companyData.systemArchitecture && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {companyData.systemArchitecture.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{companyData.systemArchitecture.subtitle}</p>
                    <div className="space-y-4">
                      {companyData.systemArchitecture.layers.map((layer: { name: string; level: string; description: string; icon: string; color: string }, idx: number) => (
                        <div key={idx} className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-primary/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: layer.color }}>
                              {layer.level}
                            </span>
                            <h4 className="text-lg font-semibold text-gray-900">{layer.name}</h4>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{layer.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 核心功能模块 */}
                {companyData.coreModules && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {companyData.coreModules.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{companyData.coreModules.subtitle}</p>
                    <div className="grid gap-4">
                      {companyData.coreModules.modules.map((module: { name: string; description: string; icon: string; color: string }, idx: number) => (
                        <div key={idx} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 border border-gray-200">
                          <h4 className="text-lg font-semibold mb-2" style={{ color: module.color }}>
                            {module.name}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{module.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* 适用场景与价值产出 */}
                {companyData.applicableScenarios && (
                  <section>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {companyData.applicableScenarios.title}
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {language === 'zh' ? '适用场景' : 'Applicable Scenarios'}
                        </h4>
                        <ul className="space-y-2">
                          {companyData.applicableScenarios.scenarios.map((scenario: string, idx: number) => (
                            <li key={idx} className="flex items-start text-gray-700 text-sm">
                              <span className="text-primary mr-2 mt-1">✓</span>
                              <span>{scenario}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {companyData.applicableScenarios.valueOutput.title}
                        </h4>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {companyData.applicableScenarios.valueOutput.metrics.map((metric: string, idx: number) => (
                            <div key={idx} className="bg-white rounded-lg p-3 text-center">
                              <p className="text-sm font-semibold text-primary">{metric}</p>
                            </div>
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm text-center font-medium">
                          {companyData.applicableScenarios.valueOutput.outcome}
                        </p>
                      </div>
                    </div>
                  </section>
                )}

                {/* 联系方式 */}
                <section className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'zh' ? '联系我们' : 'Contact Us'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">{language === 'zh' ? '联系人' : 'Contact Person'}</p>
                      <p className="font-semibold text-gray-900">{companyData.contact.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">{language === 'zh' ? '电话' : 'Phone'}</p>
                      <p className="font-semibold text-gray-900">{companyData.contact.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">{language === 'zh' ? '邮箱' : 'Email'}</p>
                      <p className="font-semibold text-gray-900">{companyData.contact.email}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">{language === 'zh' ? '响应时间' : 'Response Time'}</p>
                      <p className="font-semibold text-gray-900">{companyData.contact.responseTime}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                {language === 'zh' ? '关闭' : 'Close'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

ProjectModal.displayName = "ProjectModal";
