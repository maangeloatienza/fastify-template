CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(64) DEFAULT UUID() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME,
    updated_at DATETIME,
    deleted_at DATETIME,
);