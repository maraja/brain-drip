import "@babel/polyfill";
import "dotenv/config";

import "#root/db";
import "#root/server/startServer";

import "../test/dataCreator";
import "../test/dataTester";