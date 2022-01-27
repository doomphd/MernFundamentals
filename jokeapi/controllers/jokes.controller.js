const Jokes = require("../models/jokes.model")

module.exports.index = (req, res) =>{
    res.json("Hello")
}

// find all
module.exports.allJokess = (req, res) =>{
    Jokes.find()
        .then(allItems=>{
            res.json({items: allItems})
            })
        .catch(err=>res.json({message: "Something went wrong", error: err}))
}

// Create jokes
module.exports.createJokes = (req, res) =>{
    Jokes.create(req.body)
        .then(newJokes => res.json({result: newJokes}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))
        
}

// create jokes 2 (alternative)
module.exports.createJokes2 = (req, res) =>{
    const newJokes = new Jokes(req.body) // instantiate a Jokes according to model (not in dbs)
    newJokes.save()
        .then(newJokes => res.json({result: newJokes}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))
        
}


// find one
module.exports.oneJokes = (req, res) =>{
    Jokes.findOne({_id:req.params.id })
        .then(jokes => res.json({jokes: jokes}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))   
}


// Update a jokes (findOne + create)
module.exports.updateJokes = (req, res) =>{
    Jokes.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        { new: true, runValidators: true })
        .then(jokes => res.json({jokes: jokes}))
        .catch(err=>res.json({message: "Something went wrong", error: err})) 
}


// delete a jokes
module.exports.deleteJokes = (req, res) =>{
    Jokes.deleteOne({_id:req.params.id })
        .then(result => res.json({result: result}))
        .catch(err=>res.json({message: "Something went wrong", error: err}))   
}