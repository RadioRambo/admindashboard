DROP TABLE IF EXISTS customers_data;
DROP TABLE IF EXISTS payments_data;


CREATE TABLE customers_data (
    customer_id INTEGER PRIMARY KEY AUTOINCREMENT,
    cabin INTEGER,
    name TEXT,
    email TEXT,
    phone TEXT,
    gender TEXT CHECK(gender IN ('male', 'female'))
);

CREATE TABLE payments_data (
    transaction_id INTEGER ,
    customer_id INTEGER,
    transaction_date DATE,
    payment_mode TEXT CHECK(payment_mode IN ('online', 'offline')),
    payment_month DATE,
    FOREIGN KEY (customer_id) REFERENCES customers_data(customer_id)
);

INSERT INTO customers_data (cabin, name, email, phone, gender) VALUES
(1, 'Amit Singh', 'amit.singh@example.com', '9876543210', 'male'),
(2, 'Neha Patel', 'neha.patel@example.com', '9876543211', 'female'),
(3, 'Rajesh Kumar', 'rajesh.kumar@example.com', '9876543212', 'male'),
(4, 'Deepika Singh', 'deepika.singh@example.com', '9876543213', 'female'),
(5, 'Alok Sharma', 'alok.sharma@example.com', '9876543214', 'male'),
(6, 'Sonia Chauhan', 'sonia.chauhan@example.com', '9876543215', 'female'),
(7, 'Vivek Dubey', 'vivek.dubey@example.com', '9876543216', 'male'),
(8, 'Kavita Mehta', 'kavita.mehta@example.com', '9876543217', 'female'),
(9, 'Amitabh Singh', 'amitabh.singh@example.com', '9876543218', 'male'),
(10, 'Sneha Nair', 'sneha.nair@example.com', '9876543219', 'female'),
(11, 'Alok Gupta', 'alok.gupta@example.com', '9876543220', 'male'),
(12, 'Rashmi Shah', 'rashmi.shah@example.com', '9876543221', 'female'),
(13, 'Raj Kumar', 'raj.kumar@example.com', '9876543222', 'male'),
(14, 'Rekha Singh', 'rekha.singh@example.com', '9876543223', 'female'),
(15, 'Abhishek Jain', 'abhishek.jain@example.com', '9876543224', 'male'),
(16, 'Meena Patel', 'meena.patel@example.com', '9876543225', 'female'),
(17, 'Sanjay Kumar', 'sanjay.kumar@example.com', '9876543226', 'male'),
(18, 'Shweta Singh', 'shweta.singh@example.com', '9876543227', 'female'),
(19, 'Arun Mehta', 'arun.mehta@example.com', '9876543228', 'male'),
(20, 'Preeti Sharma', 'preeti.sharma@example.com', '9876543229', 'female'),
(21, 'Suresh Dubey', 'suresh.dubey@example.com', '9876543230', 'male'),
(22, 'Megha Shah', 'megha.shah@example.com', '9876543231', 'female'),
(23, 'Anil Kumar', 'anil.kumar@example.com', '9876543232', 'male'),
(24, 'Ruchi Singh', 'ruchi.singh@example.com', '9876543233', 'female'),
(25, 'Manoj Gupta', 'manoj.gupta@example.com', '9876543234', 'male');


INSERT INTO payments_data (transaction_id, customer_id, transaction_date, payment_mode, payment_month) VALUES
(1000001, 1, '2022-01-01', 'online', '2022-01-01'),
(1000002, 1, '2022-02-01', 'online', '2022-02-01'),
(1000003, 1, '2022-03-01', 'online', '2022-03-01'),
(1000004, 2, '2022-01-01', 'offline', '2022-01-01'),
(1000005, 2, '2022-02-01', 'offline', '2022-02-01'),
(1000006, 3, '2022-01-01', 'online', '2022-01-01'),
(1000007, 3, '2022-03-01', 'online', '2022-03-01'),
(1000008, 3, '2022-05-01', 'online', '2022-05-01'),
(1000009, 4, '2022-01-01', 'offline', '2022-01-01'),
(1000010, 4, '2022-03-01', 'offline', '2022-03-01'),
(1000011, 4, '2022-05-01', 'offline', '2022-05-01'),
(1000012, 5, '2022-01-01', 'online', '2022-01-01'),
(1000013, 5, '2022-02-01', 'online', '2022-02-01'),
(1000014, 5, '2022-04-01', 'online', '2022-04-01'),
(1000015, 6, '2022-01-01', 'offline', '2022-01-01'),
(1000016, 6, '2022-03-01', 'offline', '2022-03-01'),
(1000017, 6, '2022-05-01', 'offline', '2022-05-01'),
(1000018, 7, '2022-01-01', 'online', '2022-01-01'),
(1000019, 7, '2022-02-01', 'online', '2022-02-01'),
(1000020, 7, '2022-04-01', 'online', '2022-04-01'),
(1000021, 8, '2022-01-01', 'offline', '2022-01-01'),
(1000022, 8, '2022-03-01', 'offline', '2022-03-01'),
(1000023, 8, '2022-05-01', 'offline', '2022-05-01'),
(1000024, 9, '2022-01-01', 'online', '2022-01-01'),
(1000025, 9, '2022-03-01', 'online', '2022-03-01'),
(1000026, 9, '2022-05-01', 'online', '2022-05-01'),
(1000027, 10, '2022-01-01', 'offline', '2022-01-01'),
(1000028, 10, '2022-02-01', 'offline', '2022-02-01'),
(1000029 ,11, '2022-01-01', 'online', '2022-01-01'),
(1000030, 11, '2022-03-01', 'online', '2022-03-01'),
(1000031, 11, '2022-05-01', 'online', '2022-05-01'),
(1000032, 12, '2022-01-01', 'offline', '2022-01-01'),
(1000033, 12, '2022-02-01', 'offline', '2022-02-01'),
(1000034, 12, '2022-04-01', 'offline', '2022-04-01'),
(1000035, 13, '2022-01-01', 'online', '2022-01-01'),
(1000036, 13, '2022-03-01', 'online', '2022-03-01'),
(1000037, 13, '2022-05-01', 'online', '2022-05-01'),
(1000038, 14, '2022-01-01', 'offline', '2022-01-01'),
(1000039, 14, '2022-02-01', 'offline', '2022-02-01'),
(1000040, 14, '2022-04-01', 'offline', '2022-04-01'),
(1000041, 15, '2022-01-01', 'online', '2022-01-01'),
(1000042, 15, '2022-02-01', 'online', '2022-02-01'),
(1000043, 15, '2022-04-01', 'online', '2022-04-01'),
(1000044, 16, '2022-01-01', 'offline', '2022-01-01'),
(1000045, 16, '2022-03-01', 'offline', '2022-03-01'),
(1000046, 16, '2022-05-01', 'offline', '2022-05-01'),
(1000047, 17, '2022-01-01', 'online', '2022-01-01'),
(1000048, 17, '2022-02-01', 'online', '2022-02-01'),
(1000049, 17, '2022-04-01', 'online', '2022-04-01'),
(1000050, 18, '2022-01-01', 'offline', '2022-01-01'),
(1000051, 18, '2022-02-01', 'offline', '2022-02-01'),
(1000052, 18, '2022-04-01', 'offline', '2022-04-01'),
(1000053, 19, '2022-01-01', 'online', '2022-01-01'),
(1000054, 19, '2022-03-01', 'online', '2022-03-01'),
(1000055, 19, '2022-05-01', 'online', '2022-05-01'),
(1000056, 20, '2022-01-01', 'offline', '2022-01-01'),
(1000057, 20, '2022-03-01', 'offline', '2022-03-01'),
(1000058, 20, '2022-05-01', 'offline', '2022-05-01'),
(1000059, 21, '2022-01-01', 'online', '2022-01-01'),
(1000060, 21, '2022-02-01', 'online', '2022-02-01'),
(1000061, 21, '2022-04-01', 'online', '2022-04-01'),
(1000062, 22, '2022-01-01', 'offline', '2022-01-01'),
(1000063, 22, '2022-04-01', 'offline', '2022-04-01'),
(1000064, 23, '2022-01-01', 'online', '2022-01-01'),
(1000065, 23, '2022-02-01', 'online', '2022-02-01'),
(1000066, 23, '2022-04-01', 'online', '2022-04-01'),
(1000067, 24, '2022-01-01', 'offline', '2022-01-01'),
(1000068, 24, '2022-02-01', 'offline', '2022-02-01'),
(1000069, 24, '2022-04-01', 'offline', '2022-04-01'),
(1000070, 25,  '2022-01-01', 'online', '2022-01-01'),
(1000071, 25, '2022-03-01', 'online', '2022-03-01'),
(1000072, 25, '2022-05-01', 'online', '2022-05-01');
