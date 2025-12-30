# 🏢 海南汇融未来有限公司

<div align="center">

**专业企业一站式服务平台 | Professional One-Stop Enterprise Service Platform**  
*Built with Next.js 16, React 19, TypeScript & Tailwind CSS 4*

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## ✨ 特性

- 🎨 **精美展示页面** - 现代化的企业服务展示设计
- 🖼️ **品牌展示** - 醒目的品牌Logo居中展示
- 📱 **响应式设计** - 完美适配手机、平板、桌面
- 🌍 **双语支持** - 中英文一键切换
- ✨ **流畅动画** - Framer Motion驱动的优雅过渡
- 🎯 **简洁明了** - 聚焦企业服务核心价值

---

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果

---

## 📁 项目结构

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # 主展示页面
│   │   ├── layout.tsx        # 布局配置
│   │   └── globals.css       # 全局样式
│   ├── components/
│   │   └── ui/               # UI组件库
│   ├── contexts/
│   │   └── LanguageContext.tsx  # 语言上下文
│   ├── data/
│   │   ├── companyData.json      # 中文数据
│   │   ├── companyData.en.json   # 英文数据
│   │   ├── uiText.json           # 中文界面文本
│   │   └── uiText.en.json        # 英文界面文本
│   └── lib/
│       └── utils.ts
├── public/
│   └── images/               # 图片资源
└── README.md
```

---

## 🎨 定制化

### 1. 修改公司信息

编辑 `src/data/companyData.json`:

```json
{
  "companyInfo": {
    "name": "海南汇融未来有限公司",
    "slogan": "专业企业一站式服务，助力自贸区企业腾飞",
    "subtitle": "为企业提供全方位的财税咨询..."
  }
}
```

### 2. 更换Logo

替换 `public/images/team/` 目录下的Logo图片

推荐尺寸: 240x240 像素或更大（支持高清屏）

### 3. 修改配色方案

编辑 `src/app/globals.css`:

```css
:root {
  --primary: #8B2F2F;    /* 主色 */
  --secondary: #3D2734;  /* 次要色 */
  --accent: #C9A872;     /* 强调色 */
}
```

### 4. 添加更多内容

在 `src/app/page.tsx` 中添加更多展示区块

---

## 🎯 页面结构

### Hero Section
- ✅ 大尺寸Logo展示
- ✅ 公司标题和Slogan
- ✅ 简短描述
- ✅ CTA按钮
- ✅ 三个特性卡片

### 特性卡片
1. **专业财税团队** - 资深注册会计师、税务师
2. **一站式服务** - 从注册到运营全流程
3. **自贸区优势** - 深度了解政策红利

---

## 🔧 技术栈

- **框架**: Next.js 16 (App Router)
- **UI库**: React 19
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **动画**: Framer Motion
- **组件**: shadcn/ui
- **图标**: Lucide React

---

## 🚀 部署

### Vercel部署（推荐）

```bash
npm i -g vercel
vercel
```

### 其他平台
- Netlify
- Railway  
- AWS Amplify
- 自建服务器

---

## 📖 相关文档

- [AI定制指南](./AI_CUSTOMIZATION_GUIDE.md) - 使用AI定制网站内容
- [工作流程快速开始](./WORKFLOW_QUICK_START.md) - 开发工作流程
- [贡献指南](./CONTRIBUTING.md) - 如何贡献代码

---

## 🎨 设计特点

- **简洁大方** - 突出品牌和核心信息
- **视觉层次** - 清晰的信息架构
- **动画流畅** - 优雅的过渡效果
- **品牌一致** - 统一的视觉语言

---

## 🤝 贡献

欢迎提交Issue和Pull Request!

---

## 📄 许可证

MIT License

---

## 📞 联系方式

- 📧 Email: contact@hrwl-ai.com
- 🌐 Website: [海南汇融未来有限公司](#)
- 📍 地址: 中国·海南·海口市

---

## 🏢 服务内容

### 核心服务
- **财税咨询** - 税务筹划、财务分析、成本控制
- **工商注册** - 公司注册、变更、注销一站式服务
- **财务代理** - 记账报税、财务分析、报表编制
- **政策咨询** - 海南自贸区优惠政策咨询

### 服务优势
- ✅ 专业财税团队
- ✅ 一站式服务
- ✅ 自贸区政策优势
- ✅ 高效响应服务

---

<div align="center">

**专业企业一站式服务，助力自贸区企业腾飞** 🏢✨

Made with ❤️ by 海南汇融未来有限公司

</div>
