
const JokesController = require("../controllers/jokes.controller")

module.exports = app =>{
    app.get("/api/jokes", JokesController.allJokess)
    app.post("/api/jokes", JokesController.createJokes)
    app.get("/api/jokes/:id", JokesController.oneJokes)
    app.put("/api/jokes/update/:id", JokesController.updateJokes)
    app.delete("/api/jokes/delete/:id", JokesController.deleteJokes)
    app.post("/api/jokes2", JokesController.createJokes2)
}