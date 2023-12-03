import cors from 'cors';
import express from 'express';
import registerRouter from '../routes/index.js';
// import models from '../models/index.js';
import mongoose from 'mongoose';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    
    // Initialize routes
    registerRouter(app);
    
    // MongoDB
    mongoose.connect('mongodb+srv://nishant:nishant@zhe-test.vxpolmd.mongodb.net/?retryWrites=true&w=majority');
};

export default initialize;