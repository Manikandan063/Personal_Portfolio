const Admin = require('../models/Admin');
const { hashPassword } = require('../utils/password');
const env = require('../config/env');

const seedAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ where: { username: env.adminUsername } });
    if (existingAdmin) {
      console.log(`Admin user (${env.adminUsername}) already exists.`);
      return;
    }

    const hashedPassword = await hashPassword(env.adminPassword);
    await Admin.create({
      username: env.adminUsername,
      password: hashedPassword
    });
    console.log(`Admin user (${env.adminUsername}) seeded successfully.`);
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};

module.exports = seedAdmin;
