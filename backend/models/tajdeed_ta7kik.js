const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tajdeed_ta7kik', {
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
      comment: "تاريخ الطلب"
    },
    request_no: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "رقم الطلب"
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    father: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "والدي"
    },
    father_birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "مواليد الوالد"
    },
    mother: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "والدتي"
    },
    mother_birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ميلاد الوالدة"
    },
    wife: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "زوجي"
    },
    wife_birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ميلاد الزوج"
    },
    child1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الولد الأول"
    },
    child1_birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ميلاد الولد الأول"
    },
    child2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الولد الثاني"
    },
    child2_birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ميلاد الولد الثاني"
    },
    child3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الولد الثالث"
    },
    child3_birthdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ ميلاد الولد الثالث"
    },
    lee: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المعيل لـ"
    },
    '3an': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "استفادة عن"
    },
    p_kadaa: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "قضاء"
    },
    p_mintaka: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "منطقة"
    },
    p_street: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "شارع"
    },
    p_building: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملك"
    },
    p_near: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "قرب"
    },
    p_phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "هاتف"
    }
  }, {
    sequelize,
    tableName: 'tajdeed_ta7kik',
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
        name: "TajdeedTa7kikFK_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
