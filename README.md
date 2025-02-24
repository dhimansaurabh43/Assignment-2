🚀 Game API
A simple REST API for managing Game data using Node.js, Express, and MongoDB Atlas.
 
📌 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/dhimansaurabh43/Assignment-2.git
 
2️⃣ Install dependencies
npm install
 
3️⃣  Database Connection Path:
mongoose.connect("mongodb+srv://saurabh:saurabh@games.iogeh.mongodb.net/?retryWrites=true&w=majority&appName=games")
PORT=3000
 
 
4️⃣ Run the server
npm start
OR using Nodemon
nodemon server.js
 
 
📮 API Endpoints
 
🔹 Create a Game
POST /api/game
📌 Body (JSON)
{
  "gameName": "UNO",
  "gameType": "family-game",
  "releaseYear": "2020"
}
 
 
🔹 Get All games
GET /api/games
 
 
🔹 Get a Game by ID
GET /api/game/{game_id}
 
 
🔹 Update a Game by ID
PUT /api/game/{game_id}
📌 Body (JSON)
{
  "gameName": "PUBG-G",
  "gameType": "action",
  "releaseYear":"2012"
}
 
 
🔹 Delete a Car by ID
DELETE /api/game/{game_id}
 
 
🔧 Tools & Technologies
Node.js
Express.js
MongoDB Atlas
Mongoose
ThunderClient/Postman
 
 
📌 Author
🚀 Developed by Saurabh Dhiman
