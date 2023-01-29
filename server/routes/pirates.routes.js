const pirateController = require("../controllers/pirates.controllers");
const {authenticate} = require('../config/jwt.config')
module.exports = app => {   
    app.get("/api/pirates/get", authenticate, pirateController.getPirates);
    app.get("/api/pirates/get/:id", authenticate ,pirateController.getPirateByID);
    app.post("/api/pirates/create", authenticate ,pirateController.createPirate);
    app.put("/api/pirates/update/:id", authenticate ,pirateController.updatePirate);
    app.delete("/api/pirates/delete/:id", authenticate ,pirateController.deletePirate);

};