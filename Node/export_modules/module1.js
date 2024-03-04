const employee = {
    "Name": "Steve",
    "Age": 30
};

const fruits = ['Apple', 'Mango', 'Orange']

const display_name = () => {
    return employee['Name']
}

module.exports = {
    employee_data: employee,
    fruits: fruits,
    fn_display_name: display_name
}