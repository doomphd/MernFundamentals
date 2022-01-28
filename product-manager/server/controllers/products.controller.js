const Products = require("../models/products.model")

module.exports.index =(req,res) => {
    res.json({message: "meow"})
}
// find all
module.exports.allProducts = (req, res) =>{
    Products.find()
        .then(products=>res.json(products))
        .catch(err=>res.json(err))
}

// Create products
module.exports.createProducts = (req, res) =>{
    Products.create(req.body)
        .then(newProducts => res.json(newProducts))
        .catch(err=>res.json(err))
        
}

// create products 2 (alternative)
module.exports.createProducts2 = (req, res) =>{
    const newProducts = new Products(req.body) // instantiate a Products according to model (not in dbs)
    newProducts.save()
        .then(newProducts => res.json({result: newProducts}))
        .catch(err=>res.json(err))
        
}


// find one
module.exports.oneProducts = (req, res) =>{
    Products.findOne({_id:req.params.id })
        .then(products => res.json(products))
        .catch(err=>res.json(err))   
}


// Update a products (findOne + create)
module.exports.updateProducts = (req, res) =>{
    Products.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        { new: true, runValidators: true })
        .then(products => res.json(products))
        .catch(err=>res.json(err)) 
}


// delete a products
module.exports.deleteProducts = (req, res) =>{
    Products.deleteOne({_id:req.params.id })
        .then(result => res.json(result))
        .catch(err=>res.json(err))   
}