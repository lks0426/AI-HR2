# AI-HR Project CI/CD Deployment Guide

## 🚀 完整的GitHub Actions自动化部署方案

本指南将帮助您设置从GitHub推送到自动部署到AWS ECS的完整CI/CD流程。

## 📋 前置条件

- [x] GitHub仓库：https://github.com/lks0426/AI-HR2
- [x] AWS ECS服务正在运行
- [x] ECR仓库已创建
- [x] SSL证书已配置

## 🔧 第一步：设置GitHub Secrets

在GitHub仓库中，转到 **Settings > Secrets and variables > Actions**，添加以下secrets：

### 必需的Secrets：

```bash
AWS_ACCESS_KEY_ID=你的AWS访问密钥ID
AWS_SECRET_ACCESS_KEY=你的AWS密钥
```

### 如何获取AWS凭证：

1. 登录AWS控制台
2. 转到IAM服务
3. 创建新用户或使用现有用户
4. 附加以下策略：
   - `AmazonEC2ContainerRegistryPowerUser`
   - `AmazonECS_FullAccess`
   - 或创建自定义策略（见下方）

### 推荐的自定义IAM策略：

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken",
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "ecs:DescribeTaskDefinition",
        "ecs:RegisterTaskDefinition",
        "ecs:UpdateService",
        "ecs:DescribeServices"
      ],
      "Resource": "*"
    }
  ]
}
```

## 🔄 第二步：CI/CD工作流程说明

当您将代码推送到`main`或`master`分支时，自动触发以下流程：

1. **代码检出** - GitHub Actions获取最新代码
2. **AWS认证** - 使用您的AWS凭证登录
3. **Docker构建** - 构建新的Docker镜像
4. **ECR推送** - 将镜像推送到AWS ECR
5. **ECS部署** - 更新ECS任务定义并部署新版本
6. **健康检查** - 验证部署成功

## 🧪 第三步：测试部署流程

### 方法1：修改代码测试

1. 克隆仓库到本地：
```bash
git clone https://github.com/lks0426/AI-HR2.git
cd AI-HR2
```

2. 做一个小修改，比如修改页面标题：
```bash
# 编辑 src/app/page.tsx，修改标题
git add .
git commit -m "测试CI/CD部署"
git push origin main
```

3. 在GitHub仓库的Actions标签页查看部署进度

### 方法2：直接在GitHub上编辑文件

1. 访问：https://github.com/lks0426/AI-HR2
2. 编辑任何文件（比如README.md）
3. 直接在GitHub上提交更改
4. 查看Actions标签页的部署状态

## 📊 第四步：监控和日志

### GitHub Actions日志
- 访问仓库的Actions标签页
- 点击具体的工作流运行查看详细日志

### AWS ECS日志
- AWS控制台 > ECS > Clusters > ai-hr-cluster
- 点击服务查看任务和日志

### 应用程序访问
- 生产环境：https://ai-hr.lks0426.com
- 健康检查会自动验证部署成功

## 🛠 故障排除

### 常见问题：

1. **AWS凭证错误**
   - 检查GitHub Secrets中的AWS_ACCESS_KEY_ID和AWS_SECRET_ACCESS_KEY
   - 验证IAM用户权限

2. **Docker构建失败**
   - 查看GitHub Actions日志中的构建错误
   - 检查Dockerfile语法

3. **ECS部署失败**
   - 检查ECS服务状态
   - 查看CloudWatch日志

4. **SSL证书问题**
   - 证书已配置支持*.lks0426.com通配符
   - 如有问题，清除浏览器缓存

## 📈 高级配置选项

### 环境分支策略
当前配置部署到生产环境，您可以扩展支持：
- `develop` 分支 → 测试环境
- `staging` 分支 → 预生产环境
- `main/master` 分支 → 生产环境

### 回滚策略
如需回滚到之前版本：
```bash
aws ecs update-service --cluster ai-hr-cluster --service ai-hr-service --task-definition ai-hr-task:PREVIOUS_REVISION
```

## 🎉 完成！

设置完成后，您的部署流程将完全自动化：
- 代码推送 → 自动构建 → 自动部署 → 自动验证

访问 https://ai-hr.lks0426.com 查看您的应用程序！