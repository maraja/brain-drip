output "api-gateway-codedeploy-app-name" {
    value = module.api-gateway-codedeploy.app-name
}

output "api-gateway-deployment-bucket-name" {
    value = module.api-gateway-codedeploy.deployment-bucket-name
}

output "api-gateway-private-ip" {
    value = module.api-gateway.private-ip
}

output "api-gateway-public-ip" {
    value = aws_eip.api-gateway-eip.public_ip
}

output "aws-region" {
    value = var.aws-region
}

output "braindrip-backend-codedeploy-app-name" {
    value = module.braindrip-backend-codedeploy.app-name
}

output "braindrip-backend-deployment-bucket-name" {
    value = module.braindrip-backend-codedeploy.deployment-bucket-name
}

output "braindrip-backend-db-address" {
    value = module.braindrip-backend-db.address
}

output "braindrip-backend-private-ip" {
    value = module.braindrip-backend.private-ip
}
