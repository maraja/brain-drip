<<<<<<< HEAD
import { default as db } from './db';

// console.log(db)
=======
const db = require("./db");
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af

const {writeFileSync} = require('fs');
const Sequelize = require('sequelize');
const sequelizeErd = require('sequelize-erd');

var fs        = require('fs');
<<<<<<< HEAD
var os = require('os');
=======
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
var path      = require('path');
var basename  = 'index.js';
// Require our models. Running each module registers the model into sequelize
// so any other part of the application can simply call sequelize.model('User')
// to get access to the User model.
// require("./models");

<<<<<<< HEAD
let modelFolder = path.join(process.cwd(), 'src', 'db', 'models')
console.log("models", modelFolder)
=======
let modelFolder = path.join(__dirname, 'models')
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af

fs
  .readdirSync(modelFolder)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = db['import'](path.join(modelFolder, file));
<<<<<<< HEAD
    console.log(model);
=======
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

(async function(){
  const svg = await sequelizeErd({ source: db }); // sequelizeErd() returns a Promise
  writeFileSync('./erd.svg', svg);
})();

<<<<<<< HEAD
export default db;
=======
module.exports = db;
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
