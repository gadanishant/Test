import { setResponse, setErrorResponse } from "./response-handler.js";
import Message from "../models/chat.js";

export const sendMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).send(message);
  } catch (error) {
    console.log("sending message error => ", error);
    setErrorResponse(error, res);
  }
};

export const getMessageHistory = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { senderId: req.user._id, receiverId: req.params.userId },
        { senderId: req.params.userId, receiverId: req.user._id }
      ]
    });
    res.send(messages);
  } catch (error) {
    console.log("getting message history error => ", error);
    setErrorResponse(error, res);
  }
};
