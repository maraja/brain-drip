#!/bin/sh
deployment_dir=/opt/braindrip/braindrip-backend
if [ -d "$deployment_dir" ] && [ -x "$deployment_dir" ]; then
  cd /opt/braindrip/braindrip-backend

  rm -rf *
fi