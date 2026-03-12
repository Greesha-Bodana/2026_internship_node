const productSchema = require("../models/ProductModel")

const getAllProducts = async (req, res) => {

    const allProducts = await productSchema.find()
    res.json({
        message: "all products",
        data: allProducts
    })

};
const getProductById = async (req, res) => {
    //const foundProduct = await productSchema.find({ _id: req.params.id })
    const foundProduct = await productSchema.findById(req.params.id)
    if (foundProduct) {
        res.json({
            message: "Product found...",
            data: foundProduct,
        });
    } else {
        res.json({
            message: "Product not found..."
        });
    }
};

const addProduct = async (req, res) => {

    //console.log("body...", req.body)
    const savedproduct = await productSchema.create(req.body)
    res.status(201).json({
        message: "product saved..",
        data: savedproduct
    })
}

const deleteProduct = async (req, res) => {

    const deletedProduct = await productSchema.findByIdAndDelete(
        req.params.id,
    );

    if (deletedProduct) {
        res.status(200).json({
            message: "product deleted",
            data: deletedProduct,
        });
    } else {
        res.status(200).json({
            message: "product not found to delete"
        });
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
}