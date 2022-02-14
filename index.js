const inquirer = require("inquirer")
const questions = require('./questions/questions')
const db = require('./db/connection');
const { exit } = require("process");

function start() {
  inquirer.prompt(questions.start)
    .then(function choice(data){
      // Chooses what to display based on response
      if (data.options === 'View all departments') {
        getDepartments();
      }else if (data.options === 'View all roles') {
        getRoles();
      }else if (data.options === 'View all employees') {
        getEmployees();
      }else if (data.options === 'Add a department') {
        addDepartment();
      }else if (data.options === 'Add a role') {
        addRole();
      }else if (data.options === 'Add an employee') {
        addEmployee();
      }else if (data.options === 'Update an employee role') {
        updateEmployee();
      }else if (data.options === 'Delete row') {
        deleteRow();
      }else {
        console.log('ERROR: invalid option')
      }
    })
}

function getDepartments() {
  const sql = 
  `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    Continue();
  });
}

function getRoles() {
  const sql = 
  `SELECT * FROM Roles`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    Continue();
  });
}

function getEmployees() {
  const sql = 
  `SELECT * FROM employees`;
  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    Continue();
  });
}

function addDepartment() {
  inquirer.prompt(questions.department)
    .then(function(data){
      const sql = `INSERT INTO departments (name) VALUES (?)`;
      const params = data.name;
      db.query(sql, params, (err, rows) => {
        if (err) throw err;
        console.log('Department added!');
        Continue();
      });
    });
}

function addRole() {
  inquirer.prompt(questions.role)
    .then(function(data){
      const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
      const params = [data.title, data.salary, data.department_id];
      db.query(sql, params, (err, rows) => {
        if (err){
          console.log('Department does not exist!');
          throw err;
        }else {
          console.log('Role added!');
        }
        Continue();
      });
    });
}

function addEmployee() {
  inquirer.prompt(questions.employee)
    .then(function(data){
      if (data.manager_id === ''){
        data.manager_id = null;
      }
      const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
      const params = [data.first_name, data.last_name, data.role_id, data.manager_id];
      db.query(sql, params, (err, rows) => {
        if (err){
          throw err;
        }else {
          console.log('Employee added!');
        }
        Continue();
      });
    });
}

function updateEmployee() {
  inquirer.prompt(questions.updateEmployee)
    .then(function(data){
      const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
      const params = [data.role_id, data.id];
      db.query(sql, params, (err, rows) => {
        if (err){
          throw err;
        }else {
          console.log('Employee updated!');
        }
        Continue();
      });
    });
}

function Continue() {
  inquirer.prompt(questions.Continue)
    .then(function(data){
      if (data.bool) {
        start()
      }else {
        console.log('Bye!')
        process.exit();
      }
    });
}

function deleteRow() {
  inquirer.prompt(questions.Delete)
    .then(function(data){
      if (data.table === 'employees') {
        inquirer.prompt(questions.deleteId)
          .then(function(data){
              const sql = `DELETE FROM employees WHERE id = ?`;
              const params = [data.id];
              db.query(sql, params, (err, rows) => {
                if (err){
                  throw err;
                }else {
                  console.log('Row Deleted!');
                }
                Continue();
                });
          })
      }else if (data.table === 'roles') {
        inquirer.prompt(questions.deleteId)
          .then(function(data){
              const sql = `DELETE FROM roles WHERE id = ?`;
              const params = [data.id];
              db.query(sql, params, (err, rows) => {
                if (err){
                  throw err;
                }else {
                  console.log('Row Deleted!');
                }
                Continue();
                });
          })
      }else if (data.table === 'departments') {
        inquirer.prompt(questions.deleteId)
          .then(function(data){
              const sql = `DELETE FROM departments WHERE id = ?`;
              const params = [data.id];
              db.query(sql, params, (err, rows) => {
                if (err){
                  throw err;
                }else {
                  console.log('Row Deleted!');
                }
                Continue();
                });
          })
      }else {
        console.log('error')
      }
    })
}
// RUN ON LOAD 
start();