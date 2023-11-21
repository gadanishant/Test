import cors from 'cors';
import express from 'express';
import registerRouter from '../routes/incident-index.js';
import models from '../models/index.js';
import mongoose from 'mongoose';

const initialize = (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());

    // MongoDB
    mongoose.connect('mongodb+srv://KedarApte:@Kedarapte2004@webdesignfall2023.0vsqfhl.mongodb.net/incidentdb?retryWrites=true&w=majority');
    
    // Initialize routes
    registerRouter(app);
    
};

export default initialize;