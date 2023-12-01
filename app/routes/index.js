import propertyRouter from './property-route.js';
import personRouter from './person-route.js';

export default (app) => {
    app.use('/getPropertyDetails', propertyRouter);
    app.use('/getApartmentDetails', propertyRouter);
    app.use('/getPersonDetails', personRouter);

};