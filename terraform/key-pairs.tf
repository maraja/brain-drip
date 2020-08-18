resource "aws_key_pair" "braindrip-key" {
    key_name = "braindrip-key"
    public_key = file("./brain_drip.pem")
}