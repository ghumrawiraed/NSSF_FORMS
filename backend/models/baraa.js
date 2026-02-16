const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baraa', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    no1: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم التسجيل الرئيسي"
    },
    no2: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم التسجيل الاقليمي"
    },
    date1: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "التاريخ"
    },
    date2: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "التاريخ"
    },
    type1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    document: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "المستندات المرفقة"
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "ملاحظات عامة"
    },
    date3: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "في"
    },
    s_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الاسم"
    }
  }, {
    sequelize,
    tableName: 'baraa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
