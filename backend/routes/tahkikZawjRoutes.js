const express = require("express");
const protect = require("../middleware/authMiddleware");

const { models } = require("../config/db");
const { ta7kik_zawj } = models;

const crud = require("../controllers/crudController");
const controller = crud(ta7kik_zawj);

const router = express.Router();

router.post("/new", controller.create);
router.get("/:id", controller.getOne);
router.get("/", controller.getAll);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);
module.exports = router;
