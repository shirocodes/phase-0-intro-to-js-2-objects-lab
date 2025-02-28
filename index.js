// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "Sky",
};

function updateEmployeeWithKeyAndValue(employee,key, value) {
    const newEmployee = {...employee, [key]: value};
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee3 = {... employee};
    delete newEmployee3[key];
    return newEmployee3;
}








