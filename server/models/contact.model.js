const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // required: true
    },
    phoneNo: {
        type: String,
        // type: Number,
        required: true,
        // max: 10
    }
},
    { timestamps: true }
);


const Contact = new mongoose.model("contacts", contactSchema);
module.exports = Contact;

// const contactSchema = new mongoose.Schema ({ })
// module.exports = mongoose.model('contacts',contactSchema);