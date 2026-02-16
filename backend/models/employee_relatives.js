const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_relatives', {
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
    relative_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الأسم والشهرة"
    },
    relation: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "صلة القربى"
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الميلاد"
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الابتداء"
    },
    SO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    death_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الوفاة"
    },
    sex: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الجنس"
    },
    student: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "طالب"
    },
    permanent_damage: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عطل دائم"
    },
    martial_status: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الوضع العائلي"
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الانتهاء"
    },
    school_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "اسم المدرسة أو الجامعة"
    },
    family_allow: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "التنزيل العائلي"
    }
  }, {
    sequelize,
    tableName: 'employee_relatives',
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
        name: "Employee_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
      {
        name: "RelEmployee_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
