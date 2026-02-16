const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ta7kik_father', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    certificate_date: {
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
    father_work: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "عمل الوالد أو الوالدة"
    },
    parents_income: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "مداخيل الوالدين"
    }
  }, {
    sequelize,
    tableName: 'ta7kik_father',
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
        name: "TahkikFatherFK_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
