const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI;

const connectDB = () => {
    try {
        mongoose.connect(mongoUri,
            {
                useNewUrlParser: true,
                // useFindAndModify: false,
                useUnifiedTopology: true
            })
        console.log(`Database had been succesfully connected`);
    }
    catch (err) {
        console.log(`Database had not been connected`, err);
    }
};

module.exports = connectDB;


// try{
//     const db = mongoose.connect(mongoUri);
//     console.log('Finally Connect to DB!!')
// }