#!/bin/bash

./slave_build.sh
docker stop frontend
docker rm frontend
./slave_start.sh
