var DataTypes = require("sequelize").DataTypes;
var _application_expertise = require("./application_expertise");
var _baraa = require("./baraa");
var _contract = require("./contract");
var _employee = require("./employee");
var _employee_info_form = require("./employee_info_form");
var _employee_list = require("./employee_list");
var _employee_list_sub = require("./employee_list_sub");
var _employee_relatives = require("./employee_relatives");
var _employment_application = require("./employment_application");
var _employment_certificate = require("./employment_certificate");
var _empoyee_pays = require("./empoyee_pays");
var _establishment = require("./establishment");
var _leave_certificate = require("./leave_certificate");
var _orders = require("./orders");
var _registration_letter = require("./registration_letter");
var _registration_request = require("./registration_request");
var _salary_list = require("./salary_list");
var _salary_list_sub = require("./salary_list_sub");
var _siblings = require("./siblings");
var _ta7kik_father = require("./ta7kik_father");
var _ta7kik_zawj = require("./ta7kik_zawj");
var _tajdeed_ta7kik = require("./tajdeed_ta7kik");
var _tasfiya = require("./tasfiya");
var _tasree7 = require("./tasree7");
var _tasree7_mostafeed = require("./tasree7_mostafeed");
var _to_concern = require("./to_concern");
var _users = require("./users");
var _wife_certificate = require("./wife_certificate");

function initModels(sequelize) {
  var application_expertise = _application_expertise(sequelize, DataTypes);
  var baraa = _baraa(sequelize, DataTypes);
  var contract = _contract(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var employee_info_form = _employee_info_form(sequelize, DataTypes);
  var employee_list = _employee_list(sequelize, DataTypes);
  var employee_list_sub = _employee_list_sub(sequelize, DataTypes);
  var employee_relatives = _employee_relatives(sequelize, DataTypes);
  var employment_application = _employment_application(sequelize, DataTypes);
  var employment_certificate = _employment_certificate(sequelize, DataTypes);
  var empoyee_pays = _empoyee_pays(sequelize, DataTypes);
  var establishment = _establishment(sequelize, DataTypes);
  var leave_certificate = _leave_certificate(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var registration_letter = _registration_letter(sequelize, DataTypes);
  var registration_request = _registration_request(sequelize, DataTypes);
  var salary_list = _salary_list(sequelize, DataTypes);
  var salary_list_sub = _salary_list_sub(sequelize, DataTypes);
  var siblings = _siblings(sequelize, DataTypes);
  var ta7kik_father = _ta7kik_father(sequelize, DataTypes);
  var ta7kik_zawj = _ta7kik_zawj(sequelize, DataTypes);
  var tajdeed_ta7kik = _tajdeed_ta7kik(sequelize, DataTypes);
  var tasfiya = _tasfiya(sequelize, DataTypes);
  var tasree7 = _tasree7(sequelize, DataTypes);
  var tasree7_mostafeed = _tasree7_mostafeed(sequelize, DataTypes);
  var to_concern = _to_concern(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var wife_certificate = _wife_certificate(sequelize, DataTypes);

  contract.belongsTo(employee, { as: "ID_employee", foreignKey: "ID"});
  employee.hasOne(contract, { as: "contract", foreignKey: "ID"});
  employee_info_form.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(employee_info_form, { as: "employee_info_forms", foreignKey: "emp_ID"});
  employee_relatives.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(employee_relatives, { as: "employee_relatives", foreignKey: "emp_ID"});
  employment_certificate.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(employment_certificate, { as: "employment_certificates", foreignKey: "emp_ID"});
  empoyee_pays.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(empoyee_pays, { as: "empoyee_pays", foreignKey: "emp_ID"});
  leave_certificate.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(leave_certificate, { as: "leave_certificates", foreignKey: "emp_ID"});
  orders.belongsTo(employee, { as: "ID_employee", foreignKey: "ID"});
  employee.hasOne(orders, { as: "order", foreignKey: "ID"});
  registration_request.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(registration_request, { as: "registration_requests", foreignKey: "emp_ID"});
  siblings.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(siblings, { as: "siblings", foreignKey: "emp_ID"});
  ta7kik_father.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(ta7kik_father, { as: "ta7kik_fathers", foreignKey: "emp_ID"});
  ta7kik_zawj.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(ta7kik_zawj, { as: "ta7kik_zawjs", foreignKey: "emp_ID"});
  tajdeed_ta7kik.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(tajdeed_ta7kik, { as: "tajdeed_ta7kiks", foreignKey: "emp_ID"});
  tasfiya.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(tasfiya, { as: "tasfiyas", foreignKey: "emp_ID"});
  tasree7.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(tasree7, { as: "tasree7s", foreignKey: "emp_ID"});
  tasree7_mostafeed.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(tasree7_mostafeed, { as: "tasree7_mostafeeds", foreignKey: "emp_ID"});
  to_concern.belongsTo(employee, { as: "emp", foreignKey: "emp_ID"});
  employee.hasMany(to_concern, { as: "to_concerns", foreignKey: "emp_ID"});
  wife_certificate.belongsTo(employee, { as: "employee", foreignKey: "employee_id"});
  employee.hasMany(wife_certificate, { as: "wife_certificates", foreignKey: "employee_id"});

  return {
    application_expertise,
    baraa,
    contract,
    employee,
    employee_info_form,
    employee_list,
    employee_list_sub,
    employee_relatives,
    employment_application,
    employment_certificate,
    empoyee_pays,
    establishment,
    leave_certificate,
    orders,
    registration_letter,
    registration_request,
    salary_list,
    salary_list_sub,
    siblings,
    ta7kik_father,
    ta7kik_zawj,
    tajdeed_ta7kik,
    tasfiya,
    tasree7,
    tasree7_mostafeed,
    to_concern,
    users,
    wife_certificate,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
