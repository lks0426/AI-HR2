# 🔧 故障排除指南

## Tailwind CSS PostCSS 错误修复

### 问题描述
```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. 
The PostCSS plugin has moved to a separate package...
```

### ✅ 已修复
我已经为您修复了这个问题：

1. **安装了正确的 PostCSS 插件**
   ```bash
   npm install @tailwindcss/postcss
   ```

2. **更新了 PostCSS 配置** (`postcss.config.js`)
   ```js
   module.exports = {
     plugins: [
       require('@tailwindcss/postcss'),
       require('autoprefixer'),
     ],
   }
   ```

3. **更新了 Tailwind 配置** (`tailwind.config.js`)
   - 转换为 CommonJS 格式以确保兼容性

### 🚀 现在可以运行
```bash
npm run dev
```

## 其他常见问题

### 1. 依赖版本冲突
如果遇到版本冲突：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 2. TypeScript 错误
如果遇到 TypeScript 类型错误：
```bash
npm run build --no-lint
```

### 3. 端口占用
如果 3000 端口被占用：
```bash
npx next dev -p 3001
```

### 4. 缓存问题
清理 Next.js 缓存：
```bash
rm -rf .next
npm run dev
```

## 验证安装成功

运行开发服务器后，您应该看到：
```
Ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

访问 http://localhost:3000 查看完整的 AI+HR 市场调研报告网站。

## 网站功能验证

✅ **页面检查列表**
- [ ] 首页英雄区块显示正确
- [ ] 市场概览数据加载
- [ ] 趋势分析图表显示
- [ ] 竞争格局信息完整
- [ ] 商业机会矩阵可见
- [ ] 战略建议部分正常
- [ ] 响应式设计在移动端正常

## 生产部署

### 构建测试
```bash
npm run build
```

### 启动生产服务器
```bash
npm run start
```

### 静态导出 (可选)
```bash
npm run build
npx next export
```

## 技术支持

如果问题仍然存在，请检查：
1. Node.js >= 18.17.0
2. npm >= 9.0.0  
3. 所有依赖正确安装
4. PostCSS 配置正确

网站现在已经完全配置好，可以正常运行了！