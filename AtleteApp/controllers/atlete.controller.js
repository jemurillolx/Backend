const express = require('express');
const app = express();
const Atlete = require('../models/atlete.model');
const redis = require('redis');
const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient(REDIS_URL);

//Simple version, without validation or sanitation
exports.getatletes = function (req, res) {
    Atlete.find({}, { name: "", mail: "", years: "", birthday: "", status:"" }, function (err, atletes) {
        var atleteMap = {};
        atletes.forEach(function (atlete) {
            atleteMap[atlete.codigo] = atletes;
        });
        res.send(atleteMap); 
    });
};

//HTTP POST
exports.atlete_create = function (req, res) {
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
    atlete.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Atlete regiter successfully')
        insert(req.body.name, atlete)
    })
    
};

//HTTP GET
exports.atlete_details = function (req, res) {
    Atlete.find({ name: req.params.name }, function (err, atlete) {
        if (err) return next(err);
        res.send(atlete);
    })
};

//HTTP PUT
exports.atlete_update = function (req, res) {
    Atlete.findByIdAndUpdate(req.params.mail, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.send('Atlete udpated.');
    });
};

//DELETE
exports.atlete_delete = function (req, res) {
    deletedata(req.params.mail)
    Atlete.findByIdAndRemove(req.params.mail, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    
    })
};

function insert(name, atlete) {
    client.hmset(name, [
        'name', atlete.name,
        'mail', atlete.size,
        'years', atlete.color,
        'birthday', atlete.cost,
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
  }
  