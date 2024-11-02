
---

# Node.js PostgreSQL Docker Project

This project is a template for setting up a Node.js application with a PostgreSQL database, managed with Docker and accessible through pgAdmin. The setup enables easy development and database management without installing PostgreSQL locally.

## Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── init.sql
├── .env
├── .dockerignore
├── .gitignore
├── src
│   ├── index.js        # Main server file for Node.js
│   └── config.js       # Database configuration file
└── README.md
```

### Key Files

- **Dockerfile**: Configures the Node.js application image.
- **docker-compose.yml**: Sets up and links the Node.js app, PostgreSQL, and pgAdmin.
- **init.sql**: Contains SQL statements to initialize the database (e.g., creating tables, inserting initial data).
- **.env**: Holds environment variables for sensitive information (e.g., database credentials).
- **src/**: The main source code folder for the Node.js application.

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Create a `.env` file**:
   Define environment variables for database credentials in a `.env` file. For example:
   ```plaintext
   PG_USER=myuser
   PG_PASSWORD=mypassword
   PG_DATABASE=mydatabase
   ```

3. **Initialize Docker containers**:
   Run Docker Compose to start the application and its dependencies.
   ```bash
   docker-compose up --build
   ```

4. **Access pgAdmin**:
   Open [http://localhost:5050](http://localhost:5050) in your browser and log in with:
   - **Email**: `admin@admin.com`
   - **Password**: `admin`

5. **Connect to PostgreSQL in pgAdmin**:
   - Hostname: `postgres` (service name in `docker-compose.yml`)
   - Port: `5432`
   - Username: Defined in `.env` as `PG_USER`
   - Password: Defined in `.env` as `PG_PASSWORD`

## Usage

### Access the Node.js Application

After running `docker-compose up`, the Node.js server will be accessible at `http://localhost:3000`.

### Running SQL Scripts

The `init.sql` file will run automatically the first time PostgreSQL starts. If you need to re-run the script, delete the database volume and start the containers again.

### API Endpoints

You can define REST API endpoints in the `src/index.js` file. Sample endpoints might include:

- `GET /api/items` - Retrieve all items
- `POST /api/items` - Add a new item

## Project Structure Overview

- **Node.js App**: The backend application written in Node.js, responsible for API endpoints and business logic.
- **PostgreSQL**: The database server for persisting application data.
- **pgAdmin**: A database management tool to easily interact with PostgreSQL.

## Troubleshooting

- **Database not initializing**: Ensure that the `init.sql` file is mounted correctly in `docker-compose.yml`.
- **pgAdmin connection issues**: Check the PostgreSQL logs with `docker-compose logs postgres` to troubleshoot.

## Future Enhancements

- Add support for migrations (using a tool like `sequelize` or `knex`).
- Add more detailed API documentation and usage examples.

