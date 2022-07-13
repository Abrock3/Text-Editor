// import and initialize the express object
const express = require('express');
const app = express();
// use the environmental variable PORT to determine the correct port to use
const PORT = process.env.PORT || 3000;

// makes the dist folder available to the user's client
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

// server initialization
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
