var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/retrieve_products',function(req,res){
	//code for retrieving products
	models.Products.findAll().then(function(products){
		return res.json({
			products:products
		});
	});
});

// dummy data // 
router.get('/test',function(req,res){
	var product_obj = {
		name: 'apples',
	    description: 'hello world',
	    image: 'img_url',
	    category: 'food',
	    quantity: 10,
	    price: 12.99,
	    status: 'active'
	}

	models.Products.create(product_obj).then(function(users){
		res.json({
			users:users
		});
	});
})


module.exports = router;