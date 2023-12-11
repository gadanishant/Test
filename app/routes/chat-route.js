import express from 'express';
import * as chatController from '../controllers/chat-controller.js';

const router = express.Router();

router.post('/send', chatController.sendChatMessage);
router.get('/history/:userId', chatController.getChatHistory);

export default router;
