
const ProductsController = require("../controllers/products.controller")

module.exports = app =>{
    app.get("/api", ProductsController.index)
    app.get("/api/products", ProductsController.allProducts)
    app.post("/api/products", ProductsController.createProducts)
    app.get("/api/products/:id", ProductsController.oneProducts)
    app.put("/api/products/update/:id", ProductsController.updateProducts)
    app.delete("/api/products/delete/:id", ProductsController.deleteProducts)
    app.post("/api/products2", ProductsController.createProducts2)
}