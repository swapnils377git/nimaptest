const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const categoryRoutes = require('./routes/category');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/category', categoryRoutes);

// app.get('/api/test', function(req, res){
//     console.log('##########################################');
//     res.json({
//         successMsg: 'API',
//     })
// })

const connectDB = require('./database/db');

connectDB();

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('**********');
    console.log(`Listening on port ${port}`);
});