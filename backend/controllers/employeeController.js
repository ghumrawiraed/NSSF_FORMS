const { sequelize, models } = require("../config/db");
const { employee, employee_relatives } = models;

const addEmployee = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { relatives, ...employeeData } = req.body;

    // Create employee
    const newEmployee = await employee.create(employeeData, {
      transaction,
    });

    // Insert relatives
    if (relatives && relatives.length > 0) {
      const relativesData = relatives.map((rel) => ({
        ...rel,
        emp_ID: newEmployee.ID, // IMPORTANT (capital ID)
      }));

      await employee_relatives.bulkCreate(relativesData, {
        transaction,
      });
    }

    await transaction.commit();

    res.status(201).json({ message: "Employee + relatives saved" });

  } catch (error) {
    await transaction.rollback();
    res.status(500).json({ error: error.message });
  }
};

module.exports = {addEmployee};