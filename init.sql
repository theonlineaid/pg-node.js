-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

-- Optional: Insert a sample user
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
