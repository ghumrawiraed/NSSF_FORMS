const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leave_certificate', {
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
      comment: "تاريخ الاعلام"
    },
    emp_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'ID'
      }
    },
    leave_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "تاريخ الترك"
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "السبب"
    },
    salary_on_leave: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "الراتب"
    },
    text_salary: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "الراتب كتابة"
    }
  }, {
    sequelize,
    tableName: 'leave_certificate',
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
        name: "leavecertificate_idx",
        using: "BTREE",
        fields: [
          { name: "emp_ID" },
        ]
      },
    ]
  });
};
