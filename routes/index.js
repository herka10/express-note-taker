const express = require('express');

const noteRoute = require('./notes');
//const feedbackRouter = require('./feedback');
//const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/notes', noteRoute);
//app.use('/feedback', feedbackRouter);
//app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
