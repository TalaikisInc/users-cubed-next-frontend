#!/bin/bash

./slave_build.sh
docker stop cubed
docker rm cubed
./slave_start.sh
