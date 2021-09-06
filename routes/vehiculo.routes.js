const controller = require("../controller/logic/vehiculo.controller");

module.exports = (app) => {
    app.get("/vehiculo", (req, res, next) =>{
        controller.getAll(req, res, next);
    });

    app.post("/vehiculo", (req, res, next) =>{
        controller.createVehiculo(req, res, next);
    });

    app.put("/vehiculo", (req, res, next) =>{
        controller.updateVehiculo(req, res, next);
    });

    app.delete("/vehiculo", (req, res, next) =>{
        controller.deleteVehiculo(req, res, next);
    });
};