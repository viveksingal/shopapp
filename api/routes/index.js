var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/users',function(req,res){
	models.Users.findAll().then(function(users){
		res.json({
			users:users
		});
	});
});

router.post('/users',function(req,res){
	var user_obj = {
		email:'r2@shop.ca',
		password:'123'
	}

	models.Users.create(user_obj).then(function(users){
		res.json({
			users:users
		});
	});
})

module.exports = router;