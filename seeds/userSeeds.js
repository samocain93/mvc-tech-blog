const { User } = require("../models");

const userData = [
  {
    username: "Paulo",
    password: "1cuDPEbPRQcV",
  },
  {
    username: "Blaire",
    password: "1TfjY2zQToR",
  },
  {
    username: "Siusan",
    password: "0YcEQpvZ7Vw",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
