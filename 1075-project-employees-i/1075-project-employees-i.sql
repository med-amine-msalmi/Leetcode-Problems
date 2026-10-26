SELECT
    Project.project_id,
    ROUND(AVG(cast(Employee.experience_years as decimal )), 2) AS average_years
FROM Project
INNER JOIN Employee
    ON Employee.employee_id = Project.employee_id
GROUP BY Project.project_id
order BY Project.project_id;