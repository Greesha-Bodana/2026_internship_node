const router = require("express").Router();

const userController = require("../controllers/UserController");

router.get("/dummy", userController.getUsers);           
router.get("/user", userController.getUserData);    
router.get("/users", userController.allUsers);       
router.get("/user/:id", userController.getUserById);     

module.exports = router;