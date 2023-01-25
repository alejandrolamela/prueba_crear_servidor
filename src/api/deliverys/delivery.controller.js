
const Delivery = require('./delivery.model');

const createPost = async(req, res, next) => {
    try {
        console.log(req.body);
        //Esta funcion vale para que no se repita el delivery, quiere decir que no puedas crear dos just eat 
        const existingDelivery = await Delivery.findOne({enterpriseName: req.body.enterpriseName});
        if (existingDelivery){
            const error = new Error ('Este delivery ya existe');
            error.status = 400;
            return next(error)
        }
        const deliveryToBeCreated = new Delivery(req.body);
        const created = await deliveryToBeCreated.save();
        return res.status(200).json(created);

    } catch (error) {
        return next(error);
    }
};

const indexGet = async (req, res, next) => {
    try {
        const deliverys = await Delivery.find();
        return res.status(200).json(deliverys);
    } catch (error) {
        return next(error);
    }
};

const editPut = async (req, res, next) => {
    try {
        
        const {id} = req.params;
        const fields = {...req.body};
        const options = {new: true};
        console.log('fields en teacher', options);
        const edited = await Delivery.findByIdAndUpdate(id, fields, options);
        return res.send(200).json(edited);
    } catch (error) {
        return next(error);
        
    }
};


const deleteDelivery= async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await Delivery.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("Elemento eliminado con éxito");
        } else {
            return res.status(200).json("No se encuentra el elemento para eliminar");
        }
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    createPost,
    indexGet,
    editPut,
    deleteDelivery
}

