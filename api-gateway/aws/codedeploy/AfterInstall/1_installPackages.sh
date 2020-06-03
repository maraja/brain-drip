#!/bin/sh
cd /opt/braindrip/api-gateway
mv .production.env .env
yarn
