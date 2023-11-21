import propertyRouter from './property-route.js';
import personRouter from './person-route.js';

export default (app) => {
    app.use('/property', propertyRouter);
    app.use('/getPersonDetails', personRouter);
};