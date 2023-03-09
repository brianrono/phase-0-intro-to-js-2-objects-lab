// Write your solution in this file!
const employee = {
    name: "Harry",
    streetAddress: "123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee};
    employees[key] = value;
    return employees;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key, value) {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key];
    return employee;
};