import propertyRouter from './property-route.js';
import personRouter from './person-route.js';
import postRouter from './post-route.js'

export default (app) => {
    app.use('/property', propertyRouter);
    app.use('/getPersonDetails', personRouter);
    app.use('/createNewPost', postRouter);
    app.use('/getAllPosts', postRouter);
    app.use('/authenticateUser', userRouter);
};