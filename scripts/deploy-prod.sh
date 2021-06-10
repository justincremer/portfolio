#!/bin/bash
# Deploys a production build

docker-compose -f ../dev/docker-compose.prod.yml build
docker-compose -f ../dev/docker-compose.prod.yml up -d
