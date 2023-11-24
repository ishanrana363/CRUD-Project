const express = require("express")
const router = express.Router()
const crudController = require("../controllers/crudController")

router.post("/create-task",crudController.createTask)
router.delete("/delete-task/:id",crudController.deleteTask)
router.post("/update-task/:id",crudController.updateTask)
router.get("/list-task",crudController.listTask)



module.exports = router