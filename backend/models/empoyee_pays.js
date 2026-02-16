const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empoyee_pays', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "المبلغ"
    },
    pay_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "التاريخ"
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملاحظات"
    },
    SI: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "حدد الفواتير"
    }
  }, {
    sequelize,
    tableName: 'empoyee_pays',
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
      {
        name: "emppays_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
