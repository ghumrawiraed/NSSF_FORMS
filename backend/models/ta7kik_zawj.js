const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ta7kik_zawj', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "التاريخ"
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    husband_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اسم زوج المضمونة"
    },
    husband_birthdate: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "تاريخ ولادة الزوج"
    },
    husband_nationality: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "جنسية الزوج"
    },
    husband_work_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "نوع العمل الذي يمارسه الزوج"
    },
    husband_work: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عمل الزوج الحالي"
    },
    husband_income: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "مداخيل الزوج"
    }
  }, {
    sequelize,
    tableName: 'ta7kik_zawj',
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
        name: "Ta7kikZawjFK_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
