# React Chat App 🚀

A real-time chat application built with **React.js, Node.js, Express, and MongoDB**. This app allows users to send and receive messages in real time.

## 🔥 Features
- 💬 Real-time messaging
- 🔐 User authentication (Optional: JWT)
- 🏪 MongoDB Atlas for database storage
- ⚡ WebSocket (Socket.io) for live chat updates
- 🎨 Modern UI with React

---

## 🛠️ Requirements
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [MongoDB Atlas](https://www.mongodb.com/atlas) (or local MongoDB)
- [Git](https://git-scm.com/)
- [Vite](https://vitejs.dev/) (for frontend)
- A `.env` file with necessary credentials

---

## 📥 Installation & Setup

### **1️⃣ Clone the Repository**
```bash
# Clone the repository
git clone https://github.com/gaganmandal7492/react-chat-app.git
cd react-chat-app
```
### **2️⃣ Backend Setup (Node.js + Express)**
# Navigate to server directory
```bash
cd server
```

# Install dependencies
```bash
npm install
```
# Configure .env file in server
   Create a .env file inside the server folder:
   ```bash
      MONGO_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/chat
   ```
#Start the server:
```bash
npm start
```

### 3️⃣ Frontend Setup (React + Vite)
```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install

# Start the development server
npm run dev
```


