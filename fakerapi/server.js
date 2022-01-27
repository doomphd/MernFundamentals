// 1. IMPORT EXPRESS
const express = require("express")
const app = express()
const port = 8000
const {faker} = require('@faker-js/faker')

class User {
    constructor(){
        this._id=faker.random.number();        
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.random.alphaNumeric(8);
    }
}
class Company {
    constructor(){
        this._id=faker.random.number();        
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}
app.use( express.json());
app.use( express.urlencoded({ extended: true }) );


app.get('/api/users/new', (req, res) => {
    const user = new User()
    res.json(user);
})

app.get('/api/company/new', (req, res) => {
    res.json(new Company());
})

app.get('/api/user/company', (req, res) => {
    let userCompany = {
        User: new User(),
        Company: new Company()
    }
    res.json(userCompany);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );