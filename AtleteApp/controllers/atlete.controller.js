const express = require('express');
const app = express();
var Atlete = require('../models/atlete.model');
/*const redis = require('redis');
const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);*/

//Simple version, without validation or sanitation
exports.getatletes = async function (req, res) {
     await Atlete.find({}, { name: "", mail: "", years: "", birthday: "", status:"" }, function (err, atletes) {
        var atleteMap = {};
        atletes.forEach(function (atlete) {
            atleteMap = atletes;
        });
        res.send(atleteMap); 
    });
};

//HTTP POST
exports.atlete_create = async function (req, res) {
    let atlete = new Atlete(
        {
            name: req.body.name,
            mail: req.body.mail,
            years: req.body.years,
            birthday: req.body.birthday,
            status: req.body.status
			
        }
    );
    //Save the information to the DB
   await  atlete.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Atlete regiter successfully')
       // insert(req.body.name, atlete)
    })
    
};

//HTTP GET
exports.atlete_details = async function (req, res) {
   await Atlete.find({ mail: req.params.mail }, function (err, atlete) {
        if (err) return next(err);
        res.send(atlete);
    })
};

//HTTP GET BY id
exports.atlete_details_by_id = async function (req, res) {
    await Atlete.find({ _id: req.params.id }, function (err, atlete) {
        if (err) return next(err);
        res.send(atlete);
    })
 };

//HTTP PUT
/*funciona utilizando el _id */
exports.atlete_update =  async function (req, res) {
    
    let atlete = new Atlete(
        {
            id: req.params.id,
            name: req.params.name,
            mail: req.params.mail,
            years: req.params.years,
            birthday: req.params.birthday,
            status: req.params.status
			
        } 
    );
    //console.log(atlete.id);
    /*let atlete2 = new Atlete(
        {
            id: req.params.id,
            name: req.params.name,
            mail: req.params.mail,
            years: req.params.years,
            birthday: req.params.birthday,
            status: req.params.status
			
        } 
    );*/
   /* let i =  mail;
    console.log(req);
    i = req.body.mail;
    console.log(i);
    console.log(atlete.id + ' 0' + atlete.mail);*/
    //await  Atlete.findByIdAndUpdate(atlete.id, atlete);
   //console.log(a);
   //console.log(req.body);
   
  // console.log(req);
   await Atlete.findByIdAndUpdate(atlete.id, { $set: atlete }, function (err, atlete) {
       if (err) return next(err);
        res.send('Atlete udpated.');
    });
    
};

//DELETE
/*exports.atlete_delete = function (req, res) {
   // deletedata(req.params.mail)
   let atlete = new Atlete(
    {
        id: req.body.id,
        name: req.body.name,
        mail: req.body.mail,
        years: req.body.years,
        birthday: req.body.birthday,
        status: req.body.status
        
    } 
);
console.log(atlete.id);
let aid = atlete.id +'';
//req.body = atlete;
   Atlete.findOneAndDelete(aid, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    
    })

    
};*/

exports.atlete_delete = function (req, res) {
    Atlete.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


/*
function insert(name, atlete) {
    client.hmset(name, [
        'name', atlete.name,
        'mail', atlete.mail,
        'years', atlete.years,
        'birthday', atlete.birthday,
        'status', atlete.status
    ], function(err, reply){
        if(err){
            console.log(err)
        }
        console.log(reply)
    })
}

function deletedata(mail){
    client.del(mail);
}*/
  