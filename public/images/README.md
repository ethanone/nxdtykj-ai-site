# 图片资源说明

## 📁 目录结构

```
public/
├── uumi-logo.png                    # ✅ UUMI 主 logo（已设置）
└── images/
    ├── case-digital-employee.webp   # 🔄 占位图：数字员工与智能撰写案例
    ├── case-power-review.webp       # 🔄 占位图：输变电线路设计文档智能评审案例
    ├── case-power-grid.webp         # 🔄 占位图：电网智能规划与安全预警案例
    ├── case-3d-design.webp          # 🔄 占位图：三维建模智能助手案例
    └── team/
        ├── lichumei.jpg             # 🔄 占位图：李春梅头像
        ├── zengdan.jpg              # 🔄 占位图：曾丹头像
        ├── wushaonan.jpg            # 🔄 占位图：吴少南头像
        └── hehongjian.jpg           # 🔄 占位图：何宏建头像
```

## 🎯 使用说明

### ✅ 已完成
- **主 logo**: `uumi-logo.png` 已设置，用于网站 logo 和 favicon
- **目录结构**: 已创建完整的图片目录结构

### 🔄 待替换（当前为占位图）

#### 团队成员头像
所有团队成员头像当前使用 UUMI logo 作为占位图，建议替换为真实照片：

1. **李春梅** (`team/lichumei.jpg`)
   - 建议尺寸: 400×400px 或更大（正方形）
   - 格式: JPG/PNG/WebP
   - 要求: 专业形象照，白色或简洁背景

2. **曾丹** (`team/zengdan.jpg`)
   - 同上

3. **吴少南** (`team/wushaonan.jpg`)
   - 同上

4. **何宏建** (`team/hehongjian.jpg`)
   - 同上

#### 案例展示图片
所有案例图片当前使用 UUMI logo 作为占位图，建议替换为项目实际截图：

1. **数字员工与智能撰写** (`case-digital-employee.webp`)
   - 建议尺寸: 1200×800px（16:9 或 3:2 比例）
   - 格式: WebP（优先）或 JPG/PNG
   - 内容: 产品界面截图或效果展示

2. **输变电线路设计文档智能评审** (`case-power-review.webp`)
   - 同上
   - 内容: 智能评审系统界面或工作流程图

3. **电网智能规划与安全预警** (`case-power-grid.webp`)
   - 同上
   - 内容: 电网规划系统界面或预警平台截图

4. **三维建模智能助手** (`case-3d-design.webp`)
   - 同上
   - 内容: 3D 设计工具界面或渲染效果对比图

## 📌 替换方法

### 方式一：直接替换（推荐）
```bash
# 将您的图片复制到对应位置，覆盖占位图即可
cp your-photo.jpg public/images/team/lichumei.jpg
cp your-case-screenshot.png public/images/case-digital-employee.webp
```

### 方式二：使用图片优化工具
为了保持最佳性能，建议在替换前进行图片优化：

```bash
# 使用 ImageMagick 或在线工具进行优化
# 1. 调整尺寸
# 2. 压缩质量（80-85% 为佳）
# 3. 转换为 WebP 格式（案例图片）
```

## 🎨 图片要求

### 团队头像
- ✅ 正方形比例（1:1）
- ✅ 最小 400×400px
- ✅ 清晰、专业
- ✅ 统一的风格和背景色调

### 案例图片
- ✅ 横向比例（16:9 或 3:2）
- ✅ 最小 1200×800px
- ✅ 高清、美观
- ✅ 展示产品/项目的核心功能

## 🚀 优化建议

1. **文件大小**: 
   - 头像: < 100KB
   - 案例图: < 300KB

2. **格式选择**:
   - 照片/复杂图像: WebP > JPG
   - 简单图形/Logo: PNG > SVG

3. **命名规范**: 保持当前文件名，直接替换即可

---

**注意**: 当前所有占位图片都可以正常显示，网站功能不受影响。您可以随时准备好真实图片后进行替换。

