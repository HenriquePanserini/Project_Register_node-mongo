const mongoose = require('mongoose') 

const Person = mongoose.Model('Person',{
    name: String,
    salary: Number,
    approved: Boolean,
})

module.exports = Person;