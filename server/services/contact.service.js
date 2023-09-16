const ContactModal = require('../models/contact.model');

module.exports = {
    // .findAll
    getContacts: async (req, res) => {
        try {
            const response = await ContactModal.find();
            return res.status(200).json({
                status: 200,
                data: response,
                message: 'Got All Contacts...'
            })
        }
        catch (err) {
            // res.send(err);
            console.log(err);
        }
    },

    // .save
    addContact: async (req, res) => {
        try {
            const response = await ContactModal.create({
                name: req.body.name,
                email: req.body.email,
                phoneNo: req.body.phoneNo
            }
            );
            return res.status(200).json({
                status: 200,
                data: response,
                message: "User Contact Added Successfully..."
            })
        }
        catch (err) {
            console.log(err);
        }
    },

    getContactById: async (req, res) => {
        try {
            const response = await ContactModal.findById(req.params.id);
            return res.status(200).json({
                status: 200,
                data: response,
                message: "Contact Got by id Successfully..."
            })
        }
        catch (err) {
            console.log(err);
        }
    },

    updateContactById: async (req, res) => {
        try {
            const response = await ContactModal.findByIdAndUpdate(req.params.id, req.body);
            return res.status(200).json({
                status: 200,
                data: response,
                message: "User Contact Updated Successfully..."
            })
        }
        catch (err) {
            console.log(err);
        }
    },

    deleteContactById: async (req, res) => {
        try {
            const response = await ContactModal.findByIdAndRemove(req.params.id);
            return res.status(200).json({
                status: 200,
                data: response,
                message: "User Contact had been Deleted By Id Successfully..."
            })
        }
        catch (err) {
            console.log(err);
        }
    },

    // deleteAll
    deleteAllContacts: async (req, res) => {
        try {
            const response = await ContactModal.deleteMany();
            return res.status(200).json({
                status: 200,
                data: response,
                message: "All User Contact had been Deleted Successfully..."
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}


//  return res.status.json({});