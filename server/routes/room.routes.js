const express = require("express");
const Room = require("../model/room.model");
const roomRouter = express.Router();

roomRouter.post("/add", async (req, res) => {
  const { room } = req.body;
  try {
    const existingUser = await Room.findOne({ room });
    const room = new Room({
      room,
    });

    const newRoom = await room.save();

    res.json({ user: newUser });
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = roomRouter;
