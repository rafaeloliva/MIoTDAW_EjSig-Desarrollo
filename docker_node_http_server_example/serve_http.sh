#!/bin/bash
CONTAINER_NAME=http-server
DIR_TO_SERVE=$1
HOST_PORT=$2

echo "{$CONTAINER_NAME, serving:$DIR_TO_SERVE, port:$HOST_PORT}"

docker run \
--rm \
--interactive \
--name $CONTAINER_NAME \
--volume $DIR_TO_SERVE:/dir_to_serve \
--publish $HOST_PORT:8080 \
abassi/node-http-server