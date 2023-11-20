import express from 'express';
import initialize from './app/services/app.js';

const app = express();
const port = 3000;
initialize(app);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

