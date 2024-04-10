# Student Management System

## Overview
The Student Management System is a web-based application designed to assist educational institutions in managing student data efficiently. It allows administrators to add new students, delete existing ones, edit student details, and read student data securely.

## Features
- **Add New Student**: Administrators can add new students to the system by providing their details such as name, email, and class.
- **Delete Existing Student**: Administrators can delete existing student records from the system.
- **Edit Student Details**: Administrators can edit student details such as name, email, and class.
- **Read Student Data**: Administrators can view student details including their name, email, and class.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web application framework for Node.js, providing robust features for building web applications.
- **MongoDB**: A NoSQL database for storing student data.
- **EJS (Embedded JavaScript)**: A simple templating language that generates HTML markup with plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **VSCode**: Integrated development environment (IDE) used for writing and debugging code.

## Getting Started
1. **Prerequisites**: Ensure you have Node.js and MongoDB installed on your system.
2. **Installation**:
3. **Database Setup**: 
- Start MongoDB server.
- Update the database configuration in `config/database.js` if needed.
4. **Run the Application**:
5. Access the application at `http://localhost:3000` in your web browser.

## Folder Structure
- **`config/`**: Contains configuration files, including database configuration.
- **`controllers/`**: Handles application logic.
- **`models/`**: Defines MongoDB schemas.
- **`public/`**: Stores static assets such as CSS files, images, and client-side JavaScript.
- **`routes/`**: Defines application routes.
- **`views/`**: Contains EJS templates for rendering HTML pages.

## Getting Started
1. **Prerequisites**: Ensure you have Node.js and MongoDB installed on your system.
2. **Installation**:
3. **Database Setup**: 
- Start MongoDB server.
- Update the database configuration in `config/database.js` if needed.
4. **Run the Application**:
You can start the application using npm scripts:
- To start the server in development mode with hot reload:
  ```
  npx nodemon
  ```
- To start the server in production mode:
  ```
  npm start
  ```
5. Access the application at `http://localhost:8080` in your web browser.



## Contact
For any inquiries or feedback, please contact [Nitesh Kumar](mailto:niteshkumar61725@gmail.com).
