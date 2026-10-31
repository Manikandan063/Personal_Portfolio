const { sequelize } = require('../config/db');
const { initModels } = require('../models/initModels');
const seedAdmin = require('../seeders/adminSeeder');

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL Connection has been established successfully.');
    
    // Sync all models 
    await sequelize.sync({ alter: true });
    console.log('Database schemas synced successfully.');

    // Seed the admin user
    await seedAdmin();

    console.log('Database initialization complete.');
    process.exit(0);
  } catch (error) {
    console.error('Unable to initialize database:', error);
    process.exit(1);
  }
};

initializeDatabase();
