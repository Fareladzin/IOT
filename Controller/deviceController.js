const Device = require('../models/deviceModel.js');

exports.findAll = (req, res) => {
    Device.find()
    .then(devices => {
        res.send(devices);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.create = (req, res) => {
    // Validate request
    if(!req.body.device_name) {
        return res.status(400).send({
            message: "Device name can not be empty"
        });
    }

    if(!req.body.status) {
        return res.status(400).send({
            message: "Status device can not be empty"
        });
    }

    if(!req.body.type) {
        return res.status(400).send({
            message: "Type device can not be empty"
        });
    }

    const device = new Device({
        device_name: req.body.device_name, 
        status: req.body.status,
        type: req.body.type
    });

    device.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Device."
        });
    });
};

exports.delete = (req, res) => {
    Device.findByIdAndRemove(req.params._id)
    .then(devices => {
        if(!devices) {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });
        }
        res.send({message: "Device deleted successfully!"});
    }).catch(err => {
        if(err.kind === '_id' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Device with id " + req.params._id
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.device_name) {
        return res.status(400).send({
            message: "Device name can not be empty"
        });
    }

    if(!req.body.status) {
        return res.status(400).send({
            message: "Status device can not be empty"
        });
    }

    if(!req.body.type) {
        return res.status(400).send({
            message: "Type device can not be empty"
        });
    }

    // Find note and update it with the request body
    Device.findByIdAndUpdate(req.params._id, {
        device_name: req.body.device_name, 
        status: req.body.status,
        type: req.body.type
    }, {new: true})
    .then(device => {
        if(!device) {
            return res.status(404).send({
                message: "Device not found with id" + req.params._id
            });
        }
        res.send(device);
    }).catch(err => {
        if(err.kind === '_id') {
            return res.status(404).send({
                message: "Device not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating Device with id " + req.params._id
        });
    });
};