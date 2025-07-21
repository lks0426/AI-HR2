# 🚀 快速推送代码到GitHub

## 方法1：使用Personal Access Token（推荐）

### 第1步：创建Token
1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 给token起个名字，比如 "AI-HR2"
4. 选择权限：
   - ✅ repo（全部）
   - ✅ workflow
5. 点击 "Generate token"
6. **复制生成的token**（只显示一次！）

### 第2步：推送代码
在您的本地终端执行：

```bash
# 克隆仓库（如果还没有）
git clone https://github.com/lks0426/AI-HR2.git
cd AI-HR2

# 拉取最新代码
git pull origin main

# 如果有冲突，使用服务器上的版本
git reset --hard origin/main

# 设置远程仓库（用您的token替换YOUR_TOKEN）
git remote set-url origin https://lks0426:YOUR_TOKEN@github.com/lks0426/AI-HR2.git

# 推送代码
git push origin main
```

## 方法2：下载代码包

如果上面的方法有问题，我可以创建一个tar包，您下载后手动推送：

```bash
# 在服务器上打包
cd /home/ubuntu/AI-HR2
tar -czf ai-hr2-latest.tar.gz --exclude='.git' --exclude='node_modules' --exclude='.next' .

# 您可以通过SCP或其他方式下载这个包
```

## 🎯 推送成功后

访问：https://github.com/lks0426/AI-HR2/actions 

您会看到GitHub Actions自动开始部署！

几分钟后，访问 https://ai-hr.lks0426.com 就能看到更新了。