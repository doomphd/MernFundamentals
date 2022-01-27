
const JokesController = require("../controllers/jokes.controller")

module.exports = app =>{
    console.log("server/routes")
    app.get("/", JokesController.index)
    app.get("/api/jokess", JokesController.allJokess)
    app.post("/api/jokess", JokesController.createJokes)
    app.get("/api/jokess/:id", JokesController.oneJokes)
    app.put("/api/jokess/:id", JokesController.updateJokes)
    app.delete("/api/jokess/:id", JokesController.deleteJokes)
    app.post("/api/jokess2", JokesController.createJokes2)
}