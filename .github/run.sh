#!/bin/bash

cd "$(dirname "$0")"

ubuntu_codename=$(lsb_release -c | awk '{print $2}')
if [[ "$ubuntu_codename" == "focal" ]]; then
    echo "ubuntu 20"
    ## docker-compose stop and remove all containers
    docker-compose down
    docker-compose rm -f
    docker-compose pull
    docker-compose up --build -d

elif [[ "$ubuntu_codename" == "jammy" ]]; then
    echo "ubuntu 22"
    docker compose down
    docker compose rm -f
    docker compose pull
    docker compose up --build -d

elif [[ "$ubuntu_codename" == "lunar" ]]; then
    echo "ubuntu 23"
    docker compose down
    docker compose rm -f
    docker compose pull
    docker compose up --build -d

fi

# docker pull ubuntu:focal-20240216

# docker run -it ubuntu:focal-20240216

./create-db-user.sh
