const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('to_concern', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رمز الموظف",
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    certificate_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "التاريخ"
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ بدء العمل"
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "الراتب"
    }
  }, {
    sequelize,
    tableName: 'to_concern',
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
        name: "toConcernFK_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
