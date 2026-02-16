const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registration_letter', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    letter_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "تاريخ تقديم الكتاب"
    },
    letter_no: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "رقم الكتاب"
    },
    res_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الاسم الكامل"
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الصفة"
    },
    phone: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "هاتف"
    },
    fax: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "فاكس"
    },
    no_of_emp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "عدد الطلبات"
    },
    ls_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الأسم"
    },
    ls_position: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الصفة"
    }
  }, {
    sequelize,
    tableName: 'registration_letter',
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
