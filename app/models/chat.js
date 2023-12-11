import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now },
  });

const ChatModel = mongoose.model("Chat", MessageSchema);

export default ChatModel;