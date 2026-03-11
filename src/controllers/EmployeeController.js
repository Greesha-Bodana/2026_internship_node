const employees = [
  { id: 1001, name: "vinit", salary: 3000 },
  { id: 1002, name: "shubh", salary: 28000 },
  { id: 1003, name: "Avi", salary: 31000 },
];

const getAllEmployees = (req, res) => {
    res.json({
        message:"All employees",
        data:employees
    })
};

module.exports ={
    getAllEmployees
}