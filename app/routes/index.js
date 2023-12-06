import propertyRouter from './property-route.js';
import userRouter from './user-route.js';
import postRouter from './post-route.js'

export default (app) => {
    app.use('/property', propertyRouter);
    app.use('/createNewUser', userRouter);
    app.use('/getUserDetails', userRouter);
    app.use('/createNewPost', postRouter);
    app.use('/getAllPosts', postRouter);
    app.use('/authenticateUser', userRouter);
};