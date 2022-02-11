INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance'),
  ('Human Resources'),
  ('Quality Assurance'),
  ('Supervision');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Engineer', 100000, 1),
  ('Sales', 80000, 2),
  ('Finance', 120000, 3),
  ('Human Resouces', 70000, 4),
  ('Quality Assurance', 60000, 5),
  ('Manager', 150000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Jacob', 'Liberty', 6, NULL),
  ('Dave', 'Smith', 1, 1),
  ('George', 'Davis', 2, 1),
  ('Samantha', 'Summers', 3,NULL),
  ('Susan','Williams', 4, 4),
  ('Albert', 'Macintosh', 5, 4);
