const { getAllContacts, addingContact, getContactById, updateContact, deleteContactById, deleteAllContacts } = require('../controller/contact.controller');

const router = require('express').Router();

router.get('/contacts', getAllContacts);
router.get('/contacts/:id', getContactById);
router.post('/contacts', addingContact);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContactById);
router.delete('/contacts', deleteAllContacts);


module.exports = router;