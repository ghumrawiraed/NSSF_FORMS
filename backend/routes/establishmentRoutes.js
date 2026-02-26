const express = require("express");
const protect = require("../middleware/authMiddleware");

const { models } = require("../config/db");
const { establishment } = models;

const crud = require("../controllers/crudController");
const controller = crud(establishment);

const router = express.Router();

router.get("/:id", controller.getOne);
router.patch("/:id", controller.update);

module.exports = router;
