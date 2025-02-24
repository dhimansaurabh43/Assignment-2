import express from "express"; //called express
// import games from "../data/data.js";   //called games data

import Game from "../gameSchema.js";

const router = express.Router(); //called router

//Middleware for validate game with required fields in post and put request
const validateGame = (req, res, next) => {
  const { gameName, gameType, releaseYear } = req.body;

  if (!gameName || !gameType || !releaseYear) {
    return res.status(400).json({
      message: "Missing required fields: gameName, gameType, releaseYear",
    });
  }

  next();
};

//Route to get all games
router.get("/games", async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: "Failed to get all games" });
  }
});

//route to get game by specific id
router.get("/games/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to get games" });
  }
});

//route to post game with validation of required fields
router.post("/game", validateGame, async (req, res) => {
  const { gameName, gameType, releaseYear } = req.body;

  try {
    const newGame = new Game({ gameName, gameType, releaseYear });
    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ message: "Failed to add new Game" });
  }
});

//Updating game according to game id and validation
router.put("/game/:id", validateGame, async (req, res) => {
  const { gameName, gameType, releaseYear } = req.body;

  try {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, {
      gameName,
      gameType,
      releaseYear,
    });
    if (updatedGame) {
      res.status(200).json(updatedGame);
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Failed to update game" });
  }
});

//route for deleting game according to id
router.delete("/game/:id", async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);
    if (deletedGame) {
      res.status(200).json({ message: "Game deleted successfully" });
    } else {
      res.status(404).json({ message: "Game not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete Game" });
  }
});

export default router;
