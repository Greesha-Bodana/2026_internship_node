const express = require("express"); 

const app = express();
// app.use(express.json()) 

const dbConnection = require("./src/utils/DBConnection")
dbConnection()

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/emp",employeeRoutes)

// const productRoutes = require("./src/routes/ProductRoutes")
// app.use("/prod",productRoutes)


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});