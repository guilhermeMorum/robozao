#!/bin/bash

export ROCKETCHAT_URL=localhost:3000;
export ROCKETCHAT_USER=robozao;
export ROCKETCHAT_PASSWORD=bipbip;
export ROCKETCHAT_ROOM=general;
export ROCKETCHAT_USESSL=false;
export HUBOT_NATURAL_DEBUG_MODE=true;
export HUBOT_ADAPTER=rocketchat
export HUBOT_OWNER=RocketChat
export HUBOT_DESCRIPTION='Hubot natural language processing'
export HUBOT_LOG_LEVEL=debug
#export HUBOT_CORPUS=training_data/catbot-en.yml
export HUBOT_CORPUS=training_data/robozao.yml
export HUBOT_LANG=pt
export RESPOND_TO_DM=true
export RESPOND_TO_LIVECHAT=true
export RESPOND_TO_EDITED=true
export LISTEN_ON_ALL_PUBLIC=false

bin/hubot;
