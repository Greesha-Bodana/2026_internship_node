const router =require("express").Router()
const ProductController = require("../controllers/ProductController")
router.get("/products",ProductController.getAllProducts)
module.exports = router