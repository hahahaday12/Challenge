import Sequelize from "sequelize";
import user from "./user.js";
import config from '../config/config.js';
import post from "./post.js"


const env = process.env.NODE_ENV || "development";
const dbconfig = config[env]; // config 에 development 가 전달되고 , 전달된 development 대힌 db설정값이 dbconfig에 담김
const db = {};

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  dbconfig
);

db.User = user;
db.Post = post;

Object.keys(db).forEach((ModelName) => {
  db[ModelName].init(sequelize);
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
      db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

 