
const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    enterpriseName : {
        type: String,
        required: [true, 'GLOVO, JUST EAT...'],
        enum: ['GLOVO','JUST EAT', 'UBER EATS'],
        unique: true,
    },
    whatTime: {
        type: Date,
    },
    adresse:{
        type: String
    },
    suggestion:{
        type:String,
    }
});

const Delivery = mongoose.model('deliverys', deliverySchema);
module.exports = Delivery;