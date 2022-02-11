INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('Sales'),
  ('Finance'),
  ('Human Resources'),
  ('Quality Assurance'),
  ('Supervision');

INSERT INTO roles (title, salary)
VALUES
  ('Engineer', 100,000),
  ('Sales', 80,000),
  ('Finance', 120,000),
  ('Human Resouces', 70,000),
  ('Quality Assurance', 60,000),
  ('Manager', 150,000);

INSERT INTO employees (first_name, last_name, manager_id)
VALUES
  ('Jacob', 'Liberty', NULL),
  ('Dave', 'Smith', 1),
  ('George', 'Davis', 1),
  ('Samantha', 'Summers', NULL),
  ('Susan','Williams', 4),
  ('Albert', 'Macintosh', 4);
