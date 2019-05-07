'use strict';
module.exports = function(app) {
    
    // var authMethod = require('./Controller/AuthController');
    // var getMethod = require('./Controller/GetController');
    // var postMethod = require('./Controller/PostController');
    var devices = require('./Controller/deviceController.js');
    var users = require('./Controller/userController');

    // //REGISTER USER
    // app.route('/user/register')
    // .post(users.create);
    
    // //GET USER
    // app.route('/user')
    // .get(users.findAll);

    // //UPDATE USER
    // app.route('/user/:userId')
    // .put(users.update);
    
    // //DELETE USER
    // app.route('/notes/:userId')
    // .delete(users.delete);

    //GET DEVICE
    app.route('/device')
    .get(devices.findAll);

    //DELETE DEVICE
    app.route('/device/:_id')
    .delete(devices.delete);
    
    //UPDATE DEVICE
    app.route('/device/:_id')
    .put(devices.update);

    //ADD DEVICE
    app.route('/device/add')
    .post(devices.create);

    //ON DEVICE
    app.route('/device/on/:_id')
    .put(devices.on);

    //OFF DEVICE
    app.route('/device/off/:_id')
    .put(devices.off);
}