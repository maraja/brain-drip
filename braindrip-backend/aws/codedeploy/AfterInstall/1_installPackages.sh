#!/bin/sh
cd /opt/braindrip/braindrip-backend
mv .production.env .env
yarn
