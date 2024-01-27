'use strict';

const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize'); // Adjust the path as needed

const UserBoundary = sequelize.define('UserBoundary', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'User',
      key: 'user_id',
    },
  },
  blocked_keywords: {
    type: DataTypes.JSONB,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = UserBoundary;
