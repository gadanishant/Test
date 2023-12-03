import incidentRouter from './incident-route.js';

export default (app) => {
    app.use('/getIncidentDetails', incidentRouter);
    
};