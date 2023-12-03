import propertyRouter from './property-route.js';
import personRouter from './person-route.js';
import postRouter from './post-route.js'

export default (app) => {
    app.use('/getPropertyDetails', propertyRouter);
    app.use('/getApartmentDetails', propertyRouter);
    app.use('/getPersonDetails', personRouter);
    app.use('/createNewPost', postRouter);
    app.use('/getAllPosts', postRouter);
};