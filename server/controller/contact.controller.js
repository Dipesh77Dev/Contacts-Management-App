const contactService = require('../services/contact.service');

module.exports = {
    getAllContacts: async (req, res) => {
        try {
            const getContactsData = await contactService.getContacts();
            return getContactsData;
        }
        catch (err) {
            console.log(err);
        }
    },

    addingContact: async (req, res) => {
        try {
            const addContactData = await contactService.addContact(req.body);
            return addContactData;
        }
        catch (err) {
            console.log(err);
        }
    },

    getContactById: async (req, res) => {
        try {
            const getContactByIdData = await contactService.getContactById();
            return getContactByIdData;
        }
        catch (err) {
            console.log(err);
        }
    },

    updateContact: async (req, res) => {
        try {
            const updateContactData = await contactService.updateContactById();
            return updateContactData;
        }
        catch (err) {
            console.log(err);
        }
    },

    deleteContactById: async (req, res) => {
        try {
            const deleteContactData = await contactService.deleteContactById();
            return deleteContactData
        }
        catch (err) {
            console.log(err);
        }
    },

    deleteAllContacts: async (req, res) => {
        try {
            const deleteContactsData = await contactService.deleteAllContacts();
            return deleteContactsData
        }
        catch (err) {
            console.log(err);
        }
    },
}


// const getContactsData = await contactService.getContacts;
