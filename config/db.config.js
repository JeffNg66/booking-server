module.exports = {
  HOST: "localhost",
  PORT: "5050",
  USER: "mini",
  PASSWORD: "mini@123",
  DB: "minidb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};