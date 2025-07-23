#!/bin/bash
# AI-HR Local Deployment Script

echo "🚀 AI-HR本地部署脚本"
echo "================================"

# 配置变量
AWS_REGION="ap-northeast-1"
AWS_ACCOUNT_ID="345289096628"
ECR_REPOSITORY="ai-hr-app"
ECS_CLUSTER="ai-hr-cluster"
ECS_SERVICE="ai-hr-service-v2"
IMAGE_TAG="manual-$(date +%Y%m%d-%H%M%S)"

echo "📦 构建Docker镜像..."
docker build -t $ECR_REPOSITORY:$IMAGE_TAG .

echo "🔐 登录ECR..."
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

echo "🏷️  标记镜像..."
docker tag $ECR_REPOSITORY:$IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

echo "⬆️  推送镜像到ECR..."
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_REPOSITORY:$IMAGE_TAG

echo "🔄 更新ECS服务..."
aws ecs update-service --cluster $ECS_CLUSTER --service $ECS_SERVICE --force-new-deployment --region $AWS_REGION

echo "✅ 部署完成！"
echo "🌐 访问: https://ai-hr.lks0426.com"
echo ""
echo "📊 检查部署状态:"
echo "aws ecs describe-services --cluster $ECS_CLUSTER --services $ECS_SERVICE --region $AWS_REGION"