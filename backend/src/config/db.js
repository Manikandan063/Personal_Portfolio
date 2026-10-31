const { Sequelize } = require('sequelize');
const env = require('./env');
const isProduction = env.nodeEnv === 'production';
const requiresSSL = isProduction || (env.databaseUrl && (env.databaseUrl.includes('render.com') || env.databaseUrl.includes('sslmode=require')));

const dialectOptions = requiresSSL
  ? {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
  : {};

const sequelize = new Sequelize(env.databaseUrl, {
  dialect: 'postgres',
  dialectOptions,
  logging: env.nodeEnv === 'development' ? console.log : false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connection established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
