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
    
<<<<<<< HEAD
=======
    // MongoDB
    mongoose.connect('mongodb+srv://wilson:123qweasdzxc@zhe-test.vxpolmd.mongodb.net/?retryWrites=true&w=majority');
>>>>>>> 49bf10dbcedc3ff3cb4778f8b2a436f8f849a0f0
};

export default initialize;