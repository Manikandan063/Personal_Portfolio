const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  shortDescription: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.STRING,
  },
  technologies: {
    type: DataTypes.JSON, // Postgres supports JSONB, but JSON is safer across dialects if standard PG isn't guaranteed, though we use PG.
    defaultValue: [],
  },
  githubUrl: {
    type: DataTypes.STRING,
  },
  liveUrl: {
    type: DataTypes.STRING,
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  displayOrder: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'draft',
  },
}, {
  tableName: 'projects',
  timestamps: true,
});

module.exports = Project;
