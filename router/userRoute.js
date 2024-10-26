const express = require("express");
const router = express.Router()
const userController  = require("../controller/userController")

router.get('/', userController.getAllUser)
router.post('/createUser', userController.createUser)
router.put('/updateUser/:id', userController.updateUser)
router.delete('/deleteUser/:id', userController.deleteUser)

module.exports = router