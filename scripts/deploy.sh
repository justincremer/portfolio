#!/bin/bash
# Deploys a developer build

docker-compose -f ../dev/docker-compose.yml build
docker-compose -f ../dev/docker-compose.yml up -d
