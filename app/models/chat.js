import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MessageSchema = Schema({
    senderId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
    receiverId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    timestamp: { 
      type: Date, 
      default: Date.now 
    },
  });

const ChatModel = mongoose.model("Chat", MessageSchema);

export default ChatModel;