import propertyRouter from './property-route.js';
import userRouter from './user-route.js';
import postRouter from './post-route.js'
import authenticationRouter from './authenticate-route.js'
import rentalApplicationRouter from './rental-application-route.js'
import incidentRouter from './incident-route.js'
import chatRouter from './chat-route.js'
import reviewRouter from './review-route.js'

export default (app) => {
    app.use('/property', propertyRouter);

    app.use('/createNewUser', userRouter);
    app.use('/getUserDetails', userRouter);
    app.use('/updateUserDetails', userRouter);
    app.use('/getAllUsers', userRouter);
    app.use('/deleteUser', userRouter);

    app.use('/createNewPost', postRouter);
    app.use('/getAllPosts', postRouter);
    app.use('/updatePost', postRouter);
    app.use('/deletePost', postRouter);
    app.use('/getPost', postRouter);
    
    app.use('/authenticateUser', authenticationRouter);
    
    app.use('/submitRentalApplication', rentalApplicationRouter);
    app.use('/updateRentalApplicationDetails', rentalApplicationRouter);
    app.use('/getAllApplications', rentalApplicationRouter);
    app.use('/deleteApplication', rentalApplicationRouter);
    
    app.use('/getAllIncidents', incidentRouter);
    app.use('/addNewIncident', incidentRouter);
    app.use('/updateIncidentDetails', incidentRouter);
    app.use('/deleteIncident', incidentRouter);
    app.use('/getIncident', incidentRouter);

    app.use('/chat', chatRouter);

    app.use('/getAllReviews', reviewRouter);
};