const mongoose = require('mongoose')

const dbConnection = () => {

    mongoose.connect("mongodb://127.0.0.1:27017/2026_internship_vehiclevault").then(() => {
        console.log("db connected...")
    }).catch((err)=>{
        console.log("database not connected...",err)
    })
}

module.exports = dbConnection