#!/bin/bash

sudo systemctl disable mongodb
sudo systemctl stop mongodb

mongosh_install=$(which mongosh)
echo mongosh_installed? $mongosh_install

if [[ -z "$mongosh_install" ]]; then
  wget -qO- https://www.mongodb.org/static/pgp/server-7.0.asc | sudo tee /etc/apt/trusted.gpg.d/server-7.0.asc

  sudo apt install -y gnupg

  wget -qO- https://www.mongodb.org/static/pgp/server-7.0.asc | sudo tee /etc/apt/trusted.gpg.d/server-7.0.asc

  sudo touch /etc/apt/sources.list.d/mongodb-org-7.0.list
  ubuntu_codename=$(lsb_release -c | awk '{print $2}')
  if [[ $ubuntu_codename == "focal" ]]; then
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu $ubuntu_codename/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
  else
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
  fi

  sudo apt update -y

  sudo apt install -y mongodb-mongosh

fi

echo "mongosh --version" $(mongosh --version)

mongosh -u root -p V3ryS3cr3tPassw0rd --eval "
db = db.getSiblingDB('shared-devs-team'); \
db.createUser({ user: 'shared-devs', pwd: 'a0R3SjRsTUlZMzJ4dTN5RQ==', roles: [{ 'role': 'readWrite', 'db': 'shared-devs-team'  }, { 'role': 'dbAdmin', 'db': 'shared-devs-team' }]}); \
db.getUsers();
"
