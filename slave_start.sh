#!/bin/bash

APP=frontend
PORT=3001

docker run -it -p "$PORT:3000" --restart always --name "$APP" -d "$APP"
