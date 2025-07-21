# GitHub CI/CD 完整设置指南

## 🔑 第一步：创建Personal Access Token

1. 访问 GitHub Settings: https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 选择权限：
   - `repo` (所有仓库权限)
   - `workflow` (GitHub Actions)
   - `write:packages` (如果需要)
4. 复制生成的token

## 📤 第二步：推送代码到GitHub

在您的本地环境中执行：

```bash
# 克隆仓库
git clone https://github.com/lks0426/AI-HR2.git
cd AI-HR2

# 配置认证（使用token替换密码）
git remote set-url origin https://lks0426:YOUR_TOKEN@github.com/lks0426/AI-HR2.git

# 或者使用SSH（推荐）
# git remote set-url origin git@github.com:lks0426/AI-HR2.git

# 拉取最新更改
git pull origin main

# 推送更改
git push origin main
```

## 🔐 第三步：设置GitHub Secrets

访问仓库设置: https://github.com/lks0426/AI-HR2/settings/secrets/actions

添加以下Secrets：

### AWS_ACCESS_KEY_ID
```
您的AWS访问密钥ID
```

### AWS_SECRET_ACCESS_KEY  
```
您的AWS密钥
```

### 如何获取AWS凭证：

1. AWS控制台 → IAM → 用户
2. 选择用户或创建新用户
3. 附加策略：
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "ecr:*",
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

## 🚀 第四步：测试CI/CD

1. 推送任何更改到main分支
2. 访问 Actions 页面查看自动部署：
   https://github.com/lks0426/AI-HR2/actions
3. 部署成功后访问：https://ai-hr.lks0426.com

## 🛠️ 手动部署（备用方案）

如果需要立即部署，在服务器上运行：

```bash
cd /home/ubuntu/AI-HR2
./deploy-local.sh
```

## ✅ 验证部署成功

访问 https://ai-hr.lks0426.com 检查：
- 网站正常加载
- 手机端Cybozu成功公式显示正常（垂直排列）  
- 手机端转型成果数据对比显示正常（列表布局）

## 📱 移动端修复内容

1. **Cybozu成功公式**: 
   - 桌面端：横向排列
   - 手机端：垂直排列，避免溢出

2. **转型成果数据对比**:
   - 桌面端：4列网格
   - 手机端：列表布局，更好展示长文本如"100人100种工作方式"