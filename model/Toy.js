const mongoose = require('mongoose');

const ToySchema = mongoose.Schema(
    {
        toy_name:{
            type: String,
            required: true
        },
        toy_type:{
            type: String,
            required: true
        },        
        minage:{
            type: Number,
            required: true
        },    
        maxage:{
            type: Number,
            required: true
        },            
        price:{
            type: Number,
            required: true
        },     
        quantity:{
            type: Number,
            required: true
        },
        rental_amount:{
            type: Number,
            required: true
        }                   
    }
);

module.exports = mongoose.model('toy', ToySchema);