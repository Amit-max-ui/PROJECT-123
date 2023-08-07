const express = require('express');
require('dotenv').config()
const cors = require('cors')
// Require all of our models
const db = require('./models');
const app = express();
const userRoutes = require('./routes/user');
const hostleRoutes = require('./routes/Hostel')

app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/hostle', hostleRoutes);
app.use('/user', userRoutes);
db.sequelize.sync()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Connected with database')
        console.log('Listening on port ', process.env.PORT)
    });
})
.catch((error) => {
    console.error('Error occurred while syncing the database:', error);
});



