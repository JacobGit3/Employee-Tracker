const start = [
  {
    type: 'list',
    name: 'options',
    message: 'What would you like to view?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
  }
]

const Continue = [
  {
    type: 'confirm',
    name: 'bool',
    message: 'Would you like to continue using Employee Tracker?',
    default: false
  }
]

const department = [
  {
    type: 'text',
    name: 'name',
    message: 'What is the name of the Department?'
  }
]

const role = [
  {
    type: 'text',
    name: 'title',
    message: 'What is the title of the role you would like to add?'
  },
  {
    type: 'int',
    name: 'salary',
    message: 'Please input the Salary of the new role without commas or decimals.'
  },
  {
    type: 'int',
    name: 'department_id',
    message: 'What is the department id for the new role? (DEPARTMENT ID MUST EXIST)'
  }
]

const employee = [
  {
    type: 'text',
    name: 'first_name',
    message: 'What is the first name of the new employee?'
  },
  {
    type: 'text',
    name: 'last_name',
    message: 'What is the last name of the new employee?'
  },
  {
    type: 'int',
    name: 'role_id',
    message: 'What is the role ID of the new employee? (ROLE ID MUST EXIST)'
  },
  {
    type: 'int',
    name: 'manager_id',
    message: 'What is the ID of the employee manager? If new employee is a manager leave blank.'
  }
]

const updateEmployee = [
  {
    type: 'int',
    name: 'id',
    message: 'What is the ID of the employee you would like to update?'
  },
  {
    type: 'int',
    name: 'role_id',
    message: 'What is the Role ID of the new role for the employee'
  }
]

module.exports = {
  start,
  Continue,
  department,
  role,
  employee,
  updateEmployee
}