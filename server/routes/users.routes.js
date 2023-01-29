const UserController = require('../controllers/users.controllers')


module.exports = (app) =>{
    app.post('/api/pirates/register', UserController.registerUser)
    app.post('/api/pirates/login', UserController.loginUser) 
    app.get('/api/logout', UserController.logOutUser) 

}