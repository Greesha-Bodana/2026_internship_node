const productSchema = require("../models/ProductModel")

const getAllProducts = async (req, res) => {

    const allProducts = await productSchema.find()
    res.json({
        message: "all products",
        data: allProducts
    })

};

const getProductById = async (req, res) => {

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
    try {
        const savedproduct = await productSchema.create(req.body)
        res.status(201).json({
            message: "product saved..",
            data: savedproduct,
        });

    } catch (err) {

        res.status(500).json({
            message: "error while creating a product",
            err: err
        })
    }
};

const deleteProduct = async (req, res) => {

    const deletedProduct = await productSchema.findByIdAndDelete(req.params.id);

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

const updateProduct = async (req, res) => {
    const updateProduct = await productSchema.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json({
        message: "data updated..",
        data: updateProduct
    });
};

const addColor = async (req, res) => {
    const updatedProduct = await productSchema.findByIdAndUpdate(
        req.params.id,
        { $push: { colors: req.body.color } },
        { new: true }
    );

    res.status(200).json({
        message: "color added",
        data: updatedProduct
    });
};

const removeColor = async (req, res) => {
    const removeProduct = await productSchema.findByIdAndUpdate(
        req.params.id,
        { $pull: { colors: req.body.color } },
        { new: true }
    );
    res.status(200).json({
        message: "color removed",
        data: removeProduct
    });
};

const searchProduct = async (req, res) => {
    const searchParam = req.query;
    //productSchema.find({productName:req.query.name})
    console.log("req.query", searchParam)
    res.json({
        message: "searching...."
    })
}


module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct,
    addColor,
    removeColor,
    searchProduct
}