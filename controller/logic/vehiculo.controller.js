/**Dto */
const vehiculoDto= require("../../model/dto/vehiculo.dto");
const config = require("config");


exports.createVehiculo = (req, res, next) => {
    let veh = {
        color: req.body.color,
        modelo: req.body.modelo,
        serie_chasis: req.body.serie_chasis,
        serie_motor: req.body.serie_motor,
        precio: req.body.precio,
        descuento: req.body.descuento,
        estado: req.body.estado,
        marca: req.body.marca,
        categoria: req.body.categoria
    };
    vehiculoDto.create(veh, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
            info:data
            }
        );
    });
};


exports.updateVehiculo = (req, res, next) => {
    let veh = {
        color: req.body.color,
        modelo: req.body.modelo,
        serie_chasis: req.body.serie_chasis,
        serie_motor: req.body.serie_motor,
        precio: req.body.precio,
        descuento: req.body.descuento,
        estado: req.body.estado,
        marca: req.body.marca,
        categoria: req.body.categoria
    };
    vehiculoDto.update({_id: req.body.id}, veh, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
            info:data
            }
        );
    });
};


exports.getAll = (req, res, next) => {
    
    vehiculoDto.getAll({}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
            info:data
            }
        );
    });
};

exports.deleteVehiculo = (req, res, next) => {
    vehiculoDto.delete({_id: req.params.id}, (err, data) =>{
        if(err){
            res.status(400).send({message: "error al borrar"});
        }
        res.status(204).send({message: "Eliminado"});
    });
};
