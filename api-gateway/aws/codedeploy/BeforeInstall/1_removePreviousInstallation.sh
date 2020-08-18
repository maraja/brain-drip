#!/bin/sh
deployment_dir=/opt/braindrip/api-gateway
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/braindrip/api-gateway

  rm -rf *
fi