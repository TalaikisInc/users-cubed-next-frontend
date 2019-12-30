#!/bin/bash

APP=cubed
PORT=3008

docker run -it -p "$PORT:3000" --restart always --name "$APP" -d "$APP"
