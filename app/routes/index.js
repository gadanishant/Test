<<<<<<< HEAD
=======
import propertyRouter from './property-route.js';
import personRouter from './person-route.js';

export default (app) => {
    app.use('/property', propertyRouter);
    app.use('/getPersonDetails', personRouter);

};
>>>>>>> 49bf10dbcedc3ff3cb4778f8b2a436f8f849a0f0
