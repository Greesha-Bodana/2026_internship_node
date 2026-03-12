const router =require("express").Router()
const ProductController = require("../controllers/ProductController")
router.get("/products",ProductController.getAllProducts)
router.get("/product/:id",ProductController.getProductById)
router.post("/product",ProductController.addProduct)
router.delete("/product/:id",ProductController.deleteProduct)
module.exports = router