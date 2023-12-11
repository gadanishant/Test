import express from 'express';
import * as chatController from '../controllers/chat-controller.js';

const router = express.Router();

router.post('/send', chatController.sendMessage);
router.get('/history/:userId', chatController.getMessageHistory);

export default router;
