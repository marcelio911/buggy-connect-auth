#!/bin/bash

docker_install=$(which docker)
echo docker_installed? $docker_install
if [[ -z "$docker_install" ]]; then
    echo "docker not installed"
    sudo apt update -y
    sudo apt install -y docker.io
    sudo systemctl enable --now docker
    sudo usermod -aG docker $USER
    sudo docker --version

    # install docker-compose
    sudo apt install -y docker-compose
fi
