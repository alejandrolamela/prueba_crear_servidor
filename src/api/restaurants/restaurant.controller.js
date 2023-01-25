
const Restaurant = require('./restaurant.model');


const indexGet = async (req, res, next) => {
    try {
       const restaurants = await Restaurant.find().populate('delivery');
       res.status(200).json(restaurants);
    } catch (error) {
        return next(error);
    }
};

const createPost = async(req, res, next) => {
    try {
        console.log(req.body);

        const restaurantoBeCreated = new Restaurant(req.body);

        const created = await (await restaurantoBeCreated.save()).populate('delivery');

        return res.status(200).json(created);
    } catch (error) {

       return next(error); 
    }
};

const editPut = async (req, res, next) =>{
    try {
        
        const {id} = req.params; 
        const fields = {...req.body};
        const options =  {new: true};
        console.log('fields en restaurants', options);
        const edited = await Restaurant.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);

    } catch (error) {
        
        return next(error);
    }
};

const deleteRestaurant= async (req, res, next) => {
    try {

        const {id} = req.params;
        const deleted = await Restaurant.deleteOne({_id: id});
        if (deleted.deletedCount) {
            return res.status(200).json("Elemento eliminado con exito");
        } else {
            return res.status(200).json('No se encuentra elemento para eliminar');
            
        }
        
    } catch (error) {
        
        return next(error);
    }
}
//Exportamos a la ruta 

module.exports={
    indexGet,
    createPost,
    editPut,
    deleteRestaurant
}