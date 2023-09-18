const ContactModal = require('../models/contact.model');

module.exports = {
    getAllContacts: async (req, res) => {
        try {
            const response = await ContactModal.find();
            return res.status(200).json({
                status: 200,
                data: response,
                message: 'Got All Contacts...'
            })
        }
        catch (err) {
            console.log(err);
        }
    },

    addingContact: async (req, res) => {
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
            const response = await ContactModal.findByIdAndUpdate(req.params.id);
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

    updateContact: async (req, res) => {
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
    },
}


// const getContactsData = await contactService.getContacts;
//  return res.status.json({});
