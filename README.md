# ErinoTest
SDE assesment test

My front end portion is in App.js file (reactjs components)
 to run it use npm install
         then npm run build 

My backend portion is in server.js file

   make sure u connect mongodb url to your own cluster
     have mongoose,express, packages in your code
   and all nodemodules using npm init-y
# Contact Management System

This project is a simple Contact Management System with separate **frontend** and **backend** setups.

---

## 1. Backend (Node.js)
### Setup and Run
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   - Ensure MongoDB is running locally or use MongoDB Atlas.
   - Update the `MONGODB_URI` in `.env` with your database connection string.
4. Start the server:
   ```bash
   npm start
   ```
5. The backend will run on [http://localhost:5000](http://localhost:5000) (or the `PORT` specified in `.env`).

---

## 2. Frontend (React.js)
### Setup and Run
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the API URL:
   - In `src/axiosConfig.js`, set the `baseURL` to your backend's URL (e.g., `http://localhost:5000`).
4. Start the React app:
   ```bash
   npm start
   ```
5. The frontend will run on [http://localhost:3000](http://localhost:3000).

---

## Notes
- Ensure both frontend and backend are running simultaneously for the app to function.
- Test CRUD operations from the React app and verify changes in the database.

---

## Technologies Used
- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

