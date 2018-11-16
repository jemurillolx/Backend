const express = require('express');
const router = express.Router();
const atlete_controller = require('../controllers/atlete.controller');
var Atlete = require('../models/atlete.model');

// get all atletes
router.get('/atletes', atlete_controller.getatletes);

//HTTP POST
router.post('/create', atlete_controller.atlete_create);

//HTTP GET by id
router.get('/:mail', atlete_controller.atlete_details);

//HTTP PUT
router.put('/update/:id', async (req, res) => {
    const { id, name , mail, years, birthday, status } = req.query;
    const newatlete = {id, name , mail, years, birthday, status};
    await Atlete.findByIdAndUpdate(newatlete.id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});
//('/update/:mail', atlete_controller.atlete_update);

//DELETE
router.delete('/:id/delete',  async (req, res) => {
    const { id, name , mail, years, birthday, status } = req.query;
    const newatlete = {id, name , mail, years, birthday, status};
    await Atlete.findByIdAndDelete(newatlete.id,newatlete);
    res.json({status: 'Atlete Deleted!!!!'});
});

module.exports = router;
//npm i redux 