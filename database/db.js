const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://swapnil123:A5DHH0pHygb3OYcm@nimapcluster.60xgt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
        });
        console.log('**********');
        console.log('MongoDB database connected successfully!!!')
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;