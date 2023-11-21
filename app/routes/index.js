import propertyRouter from './property-route.js';

export default (app) => {
    app.use('/getPropertyDetails', propertyRouter);
    
};