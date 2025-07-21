#!/bin/bash
# 推送代码到GitHub的脚本

echo "🚀 准备推送到GitHub..."

# 检查是否有未提交的更改
if [[ -n $(git status -s) ]]; then
    echo "📝 发现未提交的更改，先提交..."
    git add .
    git commit -m "自动提交: $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "📤 推送到GitHub..."
echo "您需要在GitHub上设置以下Secrets："
echo "- AWS_ACCESS_KEY_ID"
echo "- AWS_SECRET_ACCESS_KEY"
echo ""
echo "设置地址: https://github.com/lks0426/AI-HR2/settings/secrets/actions"
echo ""
echo "推送命令（请在您的本地环境执行）："
echo "git push origin main"
echo ""
echo "推送后GitHub Actions会自动部署到 https://ai-hr.lks0426.com"