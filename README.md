
# 📌 ToDoApp  

ToDoApp is a simple yet powerful task management application that allows users to register, log in, and manage their to-do lists efficiently. Built with a **frontend-backend** architecture, the app utilizes **modern web technologies** and a **PostgreSQL database**.  

![License](https://img.shields.io/badge/License-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-v16%2B-green)

---

## 🚀 Features  

### **Frontend**  
✅ **User Authentication** – Register and log in securely using email & password.  
✅ **Task Management** – Create, edit, delete, and mark tasks as completed.  
✅ **Responsive Design** – Optimized for desktop and mobile devices.  
✅ **Notifications** – Visual feedback for user actions like task creation and errors.  

### **Backend**  
✅ **User Authentication** – Password hashing using `bcrypt` & JWT authentication.  
✅ **Database Integration** – PostgreSQL with Supabase for data storage.  
✅ **RESTful API** – Well-structured API endpoints for user and task management.  
✅ **Scalability** – Designed with a modular architecture for future expansion.  

---
## 💻 Technologies Used  

### **Frontend**  
- ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=flat&logo=html5&logoColor=white) **HTML5** – Structuring the web pages.  
- ![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=flat&logo=css3&logoColor=white) **CSS3** – Styling the web pages.  
- ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript** – Frontend logic for task management.  
- ![Supabase](https://img.shields.io/badge/Supabase-%2300C26B?style=flat&logo=supabase&logoColor=white) **Supabase** – Database integration for user authentication and task management.  

### **Backend**  
- ![Node.js](https://img.shields.io/badge/Node.js-%23339933?style=flat&logo=node.js&logoColor=white) **Node.js** – JavaScript runtime for backend development.  
- ![Express.js](https://img.shields.io/badge/Express.js-%23404D59?style=flat&logo=express&logoColor=white) **Express.js** – Web framework for building the API.  
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23336791?style=flat&logo=postgresql&logoColor=white) **PostgreSQL** – Relational database for storing user and task data.  
- ![bcrypt](https://img.shields.io/badge/bcrypt-%238D64A1?style=flat&logo=appveyor&logoColor=white) **bcrypt** – Library for hashing passwords.  
- ![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-%2341B58D?style=flat&logo=json-web-tokens&logoColor=white) **JWT** – JSON Web Tokens for secure user authentication.  
- ![dotenv](https://img.shields.io/badge/dotenv-%23048F1E?style=flat&logo=dotenv&logoColor=white) **dotenv** – Environment variable management.  
 

## 📂 Project Structure  

```
ToDoApp/
├── backend/  
│   ├── controllers/        # Business logic for API endpoints  
│   │   ├── authController.js  
│   ├── models/             # Database models  
│   │   ├── taskModel.js  
│   │   ├── todoModel.js  
│   │   └── userModel.js  
│   ├── routes/             # API routes  
│   │   ├── authRoutes.js  
│   │   └── taskRoutes.js  
│   ├── services/           # External service integrations  
│   │   └── supabaseService.js  
│   ├── package.json        # Backend dependencies  
│   ├── server.js           # Express server setup  
├── frontend/  
│   ├── assets/             # Static assets (images)  
│   ├── static_pages/       # HTML pages  
│   │   ├── login.html  
│   │   ├── register.html  
│   │   └── create.html  
│   ├── styles/             # CSS styles  
│   │   └── style.css  
│   ├── supabaseClient.js   # Frontend Supabase integration  
│   ├── script.js           # Frontend logic for task management  
│   └── index.html          # Main HTML page  
├── .gitignore              # Ignore sensitive files  
├── README.md               # Project documentation  
```

---

## 🛠 Installation  

### **Prerequisites**  
Ensure you have the following installed:  
- **[Node.js](https://nodejs.org/)** (v16 or higher)  
- **PostgreSQL** (Ensure the database is running)  
- **[Supabase](https://supabase.com/)** account (if using Supabase)  

### **Backend Setup**  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/akarichan00/todo-app.git
cd todo-app
```

2️⃣ **Navigate to Backend Directory**  
```bash
cd backend
```

3️⃣ **Install Dependencies**  
```bash
npm install
```

4️⃣ **Set Up Environment Variables**  
Create a `.env` file in the `backend/` directory and add:  
```env
DB_CONNECTION=your_postgresql_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

5️⃣ **Start the Backend Server**  
```bash
node server.js
```

### **Frontend Setup**  

1️⃣ **Navigate to Frontend Directory**  
```bash
cd frontend
```

2️⃣ **Open `index.html` in a browser**  
or  
Use **Live Server** if working locally with VS Code.  

---

## 📜 API Endpoints  

| **Endpoint**         | **Method** | **Description**           |
|----------------------|-----------|---------------------------|
| `/api/auth/register` | `POST`    | Register a new user       |
| `/api/auth/login`    | `POST`    | User login with JWT token |
| `/api/tasks`        | `GET`     | Get all tasks             |
| `/api/tasks`        | `POST`    | Create a new task         |
| `/api/tasks/:id`    | `PUT`     | Update a task             |
| `/api/tasks/:id`    | `DELETE`  | Delete a task             |

Example request for **user login**:  
```json
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

---

## 🌟 Future Enhancements  

🔹 **Task Prioritization** – Allow users to set high, medium, or low priority.  
🔹 **Due Dates & Reminders** – Add task deadlines with notifications.  
🔹 **Dark Mode** – Improve UI experience with a dark mode toggle.  
🔹 **Multi-User Collaboration** – Share task lists with other users.  

---

## 📄 License  

This project is licensed under the **ISC License**.  

---

## 🤝 Contributing  

Contributions are **welcome**! To contribute:  
1. **Fork** the repository  
2. **Create a new branch** (`git checkout -b feature-branch`)  
3. **Commit your changes** (`git commit -m "Added new feature"`)  
4. **Push to the branch** (`git push origin feature-branch`)  
5. **Open a Pull Request**  

🙌 Feel free to submit issues or suggestions in the repository!  

---

### **📧 Contact & Support**  
For questions or suggestions, reach out via GitHub Issues or create a discussion post.  
