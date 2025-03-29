# ToDoApp

ToDoApp is a simple task management application that allows users to register, log in, and manage their to-do lists. The application is built with a **frontend** and **backend** architecture, utilizing modern web technologies and a PostgreSQL database.

---

## Features

### Frontend
- **User Authentication**: Register and log in with email and password.
- **Task Management**:
  - Add, edit, and delete tasks.
  - Mark tasks as completed.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Notifications**: Visual feedback for user actions (e.g., task creation, errors).

### Backend
- **User Authentication**:
  - Password hashing with `bcrypt`.
  - Login with JSON Web Token (JWT) support.
- **Database Integration**:
  - PostgreSQL database for storing user and task data.
  - Supabase integration for database management.
- **RESTful API**:
  - Endpoints for user registration and login.
  - Scalable architecture for future task-related endpoints.

---

## Project Structure
ToDoApp/ ├── backend/ │ ├── controllers/ # Business logic for API endpoints │ │ └── authController.js │ ├── models/ # Database models (currently empty) │ │ ├── taskModel.js │ │ ├── todoModel.js │ │ └── userModel.js │ ├── routes/ # API route definitions │ │ ├── authRoutes.js │ │ └── taskRoutes.js │ ├── services/ # External service integrations │ │ └── supabaseService.js │ ├── package.json # Backend dependencies and scripts │ ├── package-lock.json # Backend dependency lock file │ └── server.js # Express server setup ├── frontend/ │ ├── assets/ # Static assets (images) │ ├── static_pages/ # HTML pages │ │ ├── login.html │ │ ├── register.html │ │ └── create.html │ ├── styles/ # CSS styles │ │ └── style.css │ ├── supabaseClient.js # Frontend Supabase integration │ ├── script.js # Frontend logic for task management │ └── index.html # Main HTML page ├── .gitignore # Ignored files (e.g., .env) ├── README.md # Project documentation └── node_modules/ # Installed dependencies

## Installation

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL database
- Supabase account (optional)

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
  ```npm install
  ```
3. ...
4. start the server:
  ```node server.js
  ```
## Technologies Used

### Frontend
- HTML, CSS, JavaScript
- Supabase (for database integration)

### Backend
- Node.js with Express.js
- PostgreSQL
- `bcrypt` for password hashing
- `dotenv` for environment variable management

## Future Enhancements
- Add task-related API endpoints (e.g., `/tasks`).
- Implement JWT-based authentication for secure API access.
- Enhance UI/UX with additional features like task prioritization and due dates.

## License
This project is licensed under the ISC License.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.