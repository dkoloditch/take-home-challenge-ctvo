const { User } = require("./models");

const seedData = async () => {
  await User.collection.drop();

  const rawUsers = [
    {
      _id: 1,
      name: "Nebularis Quantum",
      email: "nebularis_quantum@nowhere.org",
      age: 22,
    },
    {
      _id: 2,
      name: "Helixion Drift",
      email: "helixion_drift@nowhere.org",
      age: 21,
    },
  ];

  for await (user of rawUsers) new User(user).save();

  await console.log("Seed data refreshed");
};

module.exports = seedData;
