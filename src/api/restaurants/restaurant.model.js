
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, 'Debes poner el nombre de la pelicula']
    },
    delivery: {
        type: mongoose.Types.ObjectId,
        ref: 'deliverys'
    },
    city: {
        type: String,

    },
    rate:{
        type: Number,
        
    },
},
{
    timestamps:true,
});

//Exportamos el esquema de la pelicula

const Restaurant = mongoose.model("restaurants",restaurantSchema);
module.exports= Restaurant;