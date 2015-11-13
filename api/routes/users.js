var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	models.Users.findAll().then(function(users){
		res.json({
			users:users
		});
	});
});

router.get('/:userId',function(req,res){
	models.Users.findAll({
		where: {
		    id: req.params.userId,
		  }
     }).then(function(user){
     	res.json({
     		user:user
     	});
     });
});

router.post('/',function(req,res){
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