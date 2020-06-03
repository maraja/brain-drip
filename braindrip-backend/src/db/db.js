import accessEnv from "#root/helpers/accessEnv";

const DB_URI = accessEnv("DB_URI", "some_faulty_string");
var Sequelize = require('sequelize');

const db = new Sequelize(DB_URI, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false
});

<<<<<<< HEAD
export default db;
=======
module.exports = db;
>>>>>>> 461ae08e90c0639bf52d9c202d1f2a55301920af
