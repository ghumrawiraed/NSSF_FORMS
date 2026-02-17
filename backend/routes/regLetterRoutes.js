const express = require("express");
const protect = require("../middleware/authMiddleware");

const { models } = require("../config/db");
const { registration_letter } = models;

const crud = require("../controllers/crudController");
const controller = crud(registration_letter);

const router = express.Router();

router.post("/new", controller.create);
router.get("/:id", controller.getOne);
router.get("/", controller.getAll);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);
module.exports = router;
