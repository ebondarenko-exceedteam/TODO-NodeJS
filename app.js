const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const apiRoutes = require('./src/modules/routes/routes');

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);

const uri = 'mongodb+srv://ebondarenko-exceedteam:Restart987@cluster0.5337u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});