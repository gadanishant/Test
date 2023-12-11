import MessageModel from "../models/chat.js";

export const sendMessage = async (newMessage) => {
    const message = new MessageModel(newMessage);
    return await message.save();
}

export const getMessageHistory = async (userId1, userId2) => {
    const messages = await MessageModel.find({
        $or: [
            { senderId: userId1, receiverId: userId2 },
            { senderId: userId2, receiverId: userId1 }
        ]
    }).sort({ timestamp: 1 }).exec(); // Sort by timestamp

    return messages;
}
