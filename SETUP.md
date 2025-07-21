# 🚀 AI+HR 市场调研报告网站 - 安装指南

## 快速安装

### 方法1: 使用安装脚本 (推荐)
```bash
./install.sh
```

### 方法2: 手动安装
```bash
# 清理现有安装
rm -rf node_modules package-lock.json

# 安装核心依赖
npm install next@latest react@latest react-dom@latest lucide-react@latest

# 安装开发依赖
npm install -D @types/node@latest @types/react@latest @types/react-dom@latest typescript@latest eslint@latest eslint-config-next@latest tailwindcss@latest postcss@latest autoprefixer@latest
```

## 启动开发服务器

```bash
npm run dev
```

然后访问 http://localhost:3000

## 常见问题解决

### 问题1: "next: not found"
```bash
# 使用 npx 替代
npx next dev
```

### 问题2: 依赖安装失败
```bash
# 清理缓存重新安装
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 问题3: TypeScript 错误
```bash
# 生成类型定义
npx next build --no-lint
```

## 生产构建

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

## 静态导出 (可选)

如需生成静态HTML文件用于部署到CDN:

```bash
npm run build
npx next export
```

导出的文件将位于 `out/` 目录。

## 部署选项

### Vercel (推荐)
1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动部署完成

### Netlify
1. 推送代码到 Git 仓库
2. 在 Netlify 连接仓库
3. 设置构建命令: `npm run build`
4. 设置发布目录: `out` (如使用静态导出)

### 其他平台
可部署到任何支持 Node.js 的平台：
- AWS Amplify
- GitHub Pages (需静态导出)
- Firebase Hosting
- 自有服务器

## 技术支持

如遇到安装或运行问题，请检查：
1. Node.js 版本 >= 18.17.0
2. npm 版本 >= 9.0.0
3. 网络连接正常

## 项目结构

```
AI-HR2/
├── src/
│   ├── app/           # Next.js App Router
│   ├── components/    # React 组件
│   └── data/         # 市场数据
├── public/           # 静态资源
├── package.json      # 项目配置
└── README.md         # 项目说明
```