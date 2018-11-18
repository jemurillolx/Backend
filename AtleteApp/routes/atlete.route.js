const express = require('express');
const router = express.Router();
const atlete_controller = require('../controllers/atlete.controller');
var Atlete = require('../models/atlete.model');

// get all atletes
router.get('/atletes', atlete_controller.getatletes);

//HTTP POST
router.post('/create', atlete_controller.atlete_create);

//HTTP GET by mail
router.get('/:mail', atlete_controller.atlete_details);


//HTTP GET by id
router.get('/byid/:id', atlete_controller.atlete_details_by_id);


//HTTP PUT
/*router.put('/update/:id', async (req, res) => {
    const { id, name , mail, years, birthday, status } = req.query;
    const newatlete = {id, name , mail, years, birthday, status};
    await Atlete.findByIdAndUpdate(newatlete.id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});*/
router.put('/update', async (req, res) => {
    const { _id, name , mail, years, birthday, status } = req.query;
    const newatlete = {_id, name , mail, years, birthday, status};
    await Atlete.findByIdAndUpdate(newatlete._id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});


router.put('/updateName', async (req, res) => {
    const { _id, name } = req.query;
    const newatlete = {_id, name };
    await Atlete.findByIdAndUpdate(newatlete._id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});

router.put('/updateMail', async (req, res) => {
    const { _id, mail } = req.query;
    const newatlete = {_id, mail };
    await Atlete.findByIdAndUpdate(newatlete._id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});
router.put('/updateYears', async (req, res) => {
    const { _id, years } = req.query;
    const newatlete = {_id, years };
    await Atlete.findByIdAndUpdate(newatlete._id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});
router.put('/updateBirthday', async (req, res) => {
    const { _id, birthday } = req.query;
    const newatlete = {_id, birthday };
    await Atlete.findByIdAndUpdate(newatlete._id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});
router.put('/updateStatus', async (req, res) => {
    const { _id, status } = req.query;
    const newatlete = {_id, status };
    await Atlete.findByIdAndUpdate(newatlete._id,newatlete);
    res.json({status: 'Atlete Updated!!!'});
});
//('/update/:mail', atlete_controller.atlete_update);

//DELETE
router.delete('/:_id/delete',  async (req, res) => {
    const { _id, name , mail, years, birthday, status } = req.query;
    const newatlete = {_id, name , mail, years, birthday, status};
    await Atlete.findByIdAndDelete(newatlete._id);
    res.json({status: 'Atlete Deleted!!!!'});
});

module.exports = router;
//npm i redux 