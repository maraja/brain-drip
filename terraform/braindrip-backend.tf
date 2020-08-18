resource "aws_eip" "braindrip-backend-eip" {
    instance = module.braindrip-backend.instance-id
}

module "braindrip-backend" {
    source = "./node-server"

    ami-id = "ami-054362537f5132ce2"
    iam-instance-profile = module.braindrip-backend-codedeploy.iam-instance-profile
    key-pair = aws_key_pair.braindrip-key.key_name
    name = "braindrip-backend"
    private-ip = "10.0.1.6"
    subnet-id = aws_subnet.braindrip-subnet-private-1.id
    vpc-security-group-ids = [
        aws_security_group.allow-internal-http.id,
        aws_security_group.allow-ssh.id,
        aws_security_group.allow-all-outbound.id
    ]
}

module "braindrip-backend-codedeploy" {
    source = "./codedeploy-app"

    app-name = "braindrip-backend"
    ec2-instance-name = module.braindrip-backend.name
}

module "braindrip-backend-db" {
    source = "./mysql-db"

    apply-immediately = true
    db-name = "db"
    db-subnet-group-name = aws_db_subnet_group.private.id
    identifier = "braindrip-backend-db"
    password = var.braindrip-backend-db-password
    publicly-accessible = false
    username = var.braindrip-backend-db-username
    vpc-security-group-ids = [aws_security_group.allow-internal-mysql.id]

}