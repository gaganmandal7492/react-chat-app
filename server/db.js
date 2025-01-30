// const mongoose = require('mongoose')
// function Connection() {
//     const mongoURI = "mongodb://127.0.0.1:27017/chat"
//     mongoose.connect(mongoURI)
//     .then(() => console.log("connected"))
//     .catch(err => console.log(err))
// }

// module.exports = Connection

const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Atlas ✅');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit if connection fails
    }
};

module.exports = Connection;
