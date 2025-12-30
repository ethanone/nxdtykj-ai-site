"use client";

import { memo, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'zh' | 'en';
}

export const ProjectModal = memo(({ isOpen, onClose, language }: ProjectModalProps) => {
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

  const content = language === 'zh' ? {
    title: "公司简介｜ 海南汇融未来有限公司",
    sections: [
      {
        title: "公司简介",
        content: "海南汇融未来有限公司是一家专注于企业一站式服务的专业机构，深耕海南自贸区多年，为企业提供全方位的财税咨询、工商注册、税务筹划、财务代理等服务。",
        content2: "我们拥有一支经验丰富的专业团队，包括资深注册会计师、税务师和工商注册顾问，致力于帮助企业合规经营、降低税负、提升效率，助力企业在海南自贸区实现高质量发展。"
      },
      {
        title: "我们解决什么问题？",
        content: "企业在海南自贸区经营过程中，普遍面临以下痛点：",
        list: [
          "对自贸区优惠政策了解不足，无法充分利用政策红利",
          "财税管理不规范，存在税务风险",
          "工商注册、变更等手续繁琐，耗时耗力",
          "缺乏专业的财税咨询和筹划指导",
          "财务代理服务不专业，影响企业合规经营"
        ],
        footer: "我们的目标，是让企业从\"经验管理\"走向\"专业服务 + 合规经营\"。"
      },
      {
        title: "核心服务能力",
        items: [
          {
            title: "1️⃣ 财税咨询与筹划",
            content: [
              "提供专业的税务筹划方案，合理利用海南自贸区优惠政策",
              "帮助企业降低综合税负，实现税务优化",
              "确保所有方案符合税法规定，避免税务风险"
            ]
          },
          {
            title: "2️⃣ 工商注册一站式服务",
            content: [
              "提供公司注册、变更、注销等全流程服务",
              "熟悉各环节流程，平均注册时间缩短至3个工作日",
              "注册完成后提供持续服务，确保企业合规运营"
            ]
          },
          {
            title: "3️⃣ 财务代理服务",
            content: [
              "专业记账报税，确保账务准确、及时",
              "及时准确完成各类税务申报，避免税务风险",
              "定期提供财务分析报告，帮助企业优化决策"
            ]
          },
          {
            title: "4️⃣ 自贸区政策咨询",
            content: [
              "深度了解海南自贸区各项优惠政策",
              "为企业量身定制政策利用方案",
              "帮助企业合理利用政策红利，实现降本增效"
            ]
          },
          {
            title: "5️⃣ 企业合规管理",
            content: [
              "提供合规经营指导和风险防控",
              "帮助企业建立规范的财税管理体系",
              "确保企业合规经营，避免经营风险"
            ]
          }
        ]
      }
    ]
  } : {
    title: "Company Introduction | Hainan Huirong Future Co., Ltd.",
    sections: [
      {
        title: "Company Introduction",
        content: "Hainan Huirong Future Co., Ltd. is a professional institution focusing on one-stop enterprise services. With years of deep focus on Hainan Free Trade Zone, we provide comprehensive financial & tax consulting, business registration, tax planning, financial agency and other services for enterprises.",
        content2: "We have an experienced professional team, including senior certified public accountants, tax agents and business registration consultants, committed to helping enterprises operate compliantly, reduce tax burden and improve efficiency, empowering enterprises to achieve high-quality development in Hainan Free Trade Zone."
      },
      {
        title: "What Problems Do We Solve?",
        content: "Enterprises operating in Hainan Free Trade Zone generally face the following pain points:",
        list: [
          "Insufficient understanding of Free Trade Zone preferential policies, unable to fully utilize policy dividends",
          "Irregular financial & tax management, tax risks exist",
          "Business registration, change and other procedures are cumbersome, time-consuming and laborious",
          "Lack of professional financial & tax consulting and planning guidance",
          "Unprofessional financial agency services, affecting compliant operation"
        ],
        footer: "Our goal is to help enterprises move from 'experience management' to 'professional service + compliant operation'."
      },
      {
        title: "Core Service Capabilities",
        items: [
          {
            title: "1️⃣ Financial & Tax Consulting & Planning",
            content: [
              "Provide professional tax planning solutions, reasonably utilize Hainan Free Trade Zone preferential policies",
              "Help enterprises reduce comprehensive tax burden, achieve tax optimization",
              "Ensure all solutions comply with tax laws, avoid tax risks"
            ]
          },
          {
            title: "2️⃣ One-Stop Business Registration Service",
            content: [
              "Provide full-process services including company registration, change, cancellation, etc.",
              "Familiar with processes of all links, average registration time shortened to 3 working days",
              "After registration completion, provide continuous services to ensure compliant operation"
            ]
          },
          {
            title: "3️⃣ Financial Agency Service",
            content: [
              "Professional bookkeeping and tax declaration, ensure accurate and timely accounting",
              "Complete various tax declarations timely and accurately, avoid tax risks",
              "Regularly provide financial analysis reports to help enterprises optimize decisions"
            ]
          }
        ]
      }
    ]
  };

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
            className="fixed inset-4 md:inset-8 lg:inset-[10%] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200 bg-white">
              <h2 className="text-xl font-semibold text-gray-900">{content.title}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={language === 'zh' ? '关闭' : 'Close'}
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* 内容区域 - 可滚动 */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 md:py-8">
              <div className="space-y-8 max-w-3xl mx-auto">
                {content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{section.title}</h3>
                    
                    {section.content && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    
                    {section.content2 && (
                      <p className="text-base text-gray-700 leading-relaxed">
                        {section.content2}
                      </p>
                    )}

                    {section.list && (
                      <ul className="space-y-2 list-disc list-inside text-base text-gray-700">
                        {section.list.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.footer && (
                      <p className="text-base text-gray-700 leading-relaxed font-medium mt-4">
                        {section.footer}
                      </p>
                    )}

                    {section.items && (
                      <div className="space-y-6 mt-6">
                        {section.items.map((item, i) => (
                          <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                              {item.title}
                            </h4>
                            <ul className="space-y-2">
                              {item.content.map((point, j) => (
                                <li key={j} className="text-base text-gray-700 leading-relaxed flex items-start">
                                  <span className="text-gray-400 mr-2">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
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
