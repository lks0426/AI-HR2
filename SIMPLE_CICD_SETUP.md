# 超简单CI/CD设置 - 只需要3步

## 🎯 目标：push代码 → 自动部署

### 第1步：在GitHub上设置Secrets
访问：https://github.com/lks0426/AI-HR2/settings/secrets/actions

添加两个Secret：
```
Name: AWS_ACCESS_KEY_ID
Value: 您的AWS访问密钥ID

Name: AWS_SECRET_ACCESS_KEY  
Value: 您的AWS密钥
```

### 第2步：获取AWS凭证
1. AWS控制台 → IAM → 用户 → 创建访问密钥
2. 复制Access Key ID和Secret Access Key

### 第3步：推送代码
```bash
git add .
git commit -m "设置CI/CD"
git push origin main
```

## 🚀 就这么简单！

之后每次您：
```bash
git add .
git commit -m "修改了xxx"
git push origin main
```

GitHub Actions会自动：
1. 构建Docker镜像
2. 推送到ECR  
3. 更新ECS服务
4. 网站自动更新

## 📱 验证效果
推送后等待2-3分钟，访问 https://ai-hr.lks0426.com 查看更新

不需要任何手动操作！