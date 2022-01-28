// IMPORT ALL DEPENDENCIES
const express = require("express")
const app = express();
const cors = require('cors')

// configure mongoose
require("./config/mongoose.config")

// configure express
app.use(cors())
app.use(express.json(),   express.urlencoded({extended: true}))

// ROUTES

require("./routes/products.route")(app);


// listen to the port

const port = 8000;
app.listen( port, ()=> console.log(`listening on port: ${port}`))  