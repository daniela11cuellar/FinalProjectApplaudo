class Faker{
    faker = require('faker');

    getRandomEmail = () =>{
        return this.faker.internet.email();
    }

    getRandomName = () =>{
        return this.faker.name.firstName();
    }

    getRandomLastName = () =>{
        return this.faker.name.lastName();
    }

    getRandomCity = () =>{
        return this.faker.address.city();
    }
}

module.exports = new Faker();