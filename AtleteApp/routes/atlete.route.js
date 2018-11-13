const express = require('express');
const router = express.Router();
const atlete_controller = require('../controllers/atlete.controller');

// get all atletes
router.get('/atletes', atlete_controller.getatletes);

//HTTP POST
router.post('/create', atlete_controller.atlete_create);

//HTTP GET by id
router.get('/:name', atlete_controller.atlete_details);

//HTTP PUT
router.put('/:mail/update', atlete_controller.atlete_update);

//DELETE
router.delete('/:mail/delete', atlete_controller.atlete_delete);

module.exports = router;