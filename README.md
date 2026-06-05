Event Management System

The Event Management System is a web-based platform for managing events, RSVPs, and user accounts.

Key Features:

Admin Functionality:
- Create, update, and delete events.
- View RSVP lists for events.

User Functionality:
- View upcoming events.
- RSVP to events.

Authentication:
- JWT-based authentication for secure access.
- Role-based access (Admin/User).

This project uses a modern tech stack:
- Frontend: React (styled for a clean and crisp user experience).
- Backend: Node.js with Express.js.
- Database: MariaDB.

Project Setup:

1. Backend Setup
- Open the backend folder in Visual Studio Code, open up a terminal, and install dependencies:
  npm install

- Open the .env file in the backend code and update the DB_PASSWORD and DB_USER:
  DB_USER=root
  DB_PASSWORD=<your_db_password>

- Import the database:
  Open a normal terminal where the create_database.sql file exists.
  Run the SQL script (create_database.sql) using MariaDB/MySQL:
  mysql -u <username> -p < create_database.sql
  (Note: If for any reason the command doesn’t work, the .sql file simply contains SQL commands that you can copy and run directly in the MariaDB terminal)

- Start the server:
  Type the following in the terminal:
  npm run start
  The backend will run on http://localhost:5000.


2. Frontend Setup
- Open the frontend folder in a new VS Code window (keep the backend service up).
- Install dependencies:
  Type the following in the terminal:
  npm install

- Start the application:
  In a new terminal, type:
  npm run start
  The frontend will run on http://localhost:3000.


3. SQL Queries
- Run the SQL commands from eventmanagementsystem.sql to show and select from tables, as well as insert default users and events.
