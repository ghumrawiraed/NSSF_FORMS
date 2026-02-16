const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    patient_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    durantion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no1_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no2_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no3_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no4_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no5_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no6_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no7_duration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no7_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
