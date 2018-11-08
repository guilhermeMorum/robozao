#/bin/bash

sudo docker rm docker_rocketchat_1;
sudo docker rmi rocketchat/rocket.chat:latest;
sudo docker rm docker_mongo_1;
sudo docker rm docker_mongo-init-replica_1;
sudo docker rmi mongo:3.2;
