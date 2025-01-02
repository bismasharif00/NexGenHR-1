CREATE database HrSystem;
use HrSystem;

CREATE table employee(
    employee_id int(7) primary key auto_increment,
	first_name varchar(30) DEFAULT NULL,
	last_name varchar(30) DEFAULT NULL,
	em_email varchar(64) DEFAULT NULL,
	em_address varchar(250) DEFAULT NULL,
 	em_status enum('ACTIVE','INACTIVE', 'RESIGNED', 'RETIRED') NOT NULL DEFAULT 'ACTIVE', 
 	em_gender enum('Male','Female', 'Other') NOT NULL DEFAULT 'Male',
	em_phone varchar(11) DEFAULT NULL,
 	em_birthday date DEFAULT NULL, 
    joining_day date default Null,
    -- SALARY
    invoice_id int(10),
    em_salary int NOT NULL,
	final_salary int NULL,
    paid_leaves int default 0,
    unpaid_leaves int default 3
	-- foreign key (category_id) references category(category_id) 
);
drop table employee;

CREATE table category(
	category_id int primary key auto_increment,
	department enum('IT', 'Sales', 'Marketing', 'Management') default null,
    designation enum(
    -- IT
    'Sr. Mobile Dev', 'Jr. Mobile Dev', 'Sr. Web Dev', 'Jr. Web Dev',
    -- Sales
    'Sales Supervisor', 'Sales Associate', 'Sales Engineer', 'Account Manager',
    -- Marketing
    'Chief Marketing Officer', 'Marketing Specialist', 'Copywriter/Content Creator', 'SEO specialist',
    -- Management
    'Office Manager', 'Department Manager', 'Assistant Manager', 'Social media manager', 'Trainee Manager'
    ) default null
);

