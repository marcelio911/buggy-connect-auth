#!/bin/bash
cd "$(dirname "$0")"

sudo udevadm control --reload-rules
sudo udevadm trigger

sudo ./install_docker_ubuntu.sh
sudo ./run.sh