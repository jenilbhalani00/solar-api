const storage = require('node-persist');
storage.init();

var registermodel = require('../model/registermodel')


exports.register = async(req,res) =>{
    var data = await registermodel.create(req.body)

    res.status(200).json({
        status:'register'
    })
}
exports.register_data = async(req,res) =>{
    var data = await registermodel.find(req.body)

    res.status(200).json({
        status:'register',
        data
    })
}
exports.delete = async (req, res) => {
    var id = req.params.id
    var data = await registermodel.findByIdAndDelete(id);

    res.status(200).json({
        status: "data deleted succussfully",
    })
}

// admin data update
exports.update = async (req, res) => {
    var id = req.params.id
    var data = await registermodel.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: "data update succussfully",
    
    })
}

// get update data
exports.update_data = async (req, res) => {
    var data = await registermodel.find();

    res.status(200).json({
        status: "data get succussfully",
        data
    })
}

exports.id_data = async (req, res) => {
    id = req.params.id
    var data = await registermodel.findById(id)
    res.status(200).json({
        status: "success",
        data
    })
}
