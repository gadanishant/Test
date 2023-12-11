import { setResponse, setErrorResponse } from "./response-handler.js";
import * as ChatService from '../services/chat-service.js';

export const sendChatMessage = async (req, res) => {
    try {
        const newMessage = {
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            content: req.body.content
        };
        const message = await ChatService.sendMessage(newMessage);
        res.status(201).json(message);
    } catch (error) {
        console.log("Message not sent! error => ", error);
        setErrorResponse(error, res);
    }
};

export const getChatHistory = async (req, res) => {
    try {
        const { userId1, userId2 } = req.params; // or req.query
        const messages = await ChatService.getMessageHistory(userId1, userId2);
        res.json(messages);
    } catch (error) {
        console.log("History not found! error => ", error);
        setErrorResponse(error, res);
    }
};
