var loginmodel = require('../model/loginmodel')
var registermodel = require('../model/registermodel')

const storage = require('node-persist');
storage.init();
/* admin login */

exports.admin_login = async (req, res) => {
    var data = await registermodel.find({ "email": req.body.email });
    var admin_id = await storage.getItem('admin_id');
    console.log(data)
    if (admin_id == undefined) {
        if (data.length == 1) {
            if (data[0].password == req.body.password) {
                await storage.setItem('admin_id', data[0].id)
                res.status(200).json({
                    status: "true",
                    data
                })
            } else {
                res.status(200).json({
                    status: "check password"
                })
            }
        } else {
            res.status(200).json({
                status: "check email"
            })
        }
    } else {
        res.status(200).json({
            status: "already admin login"
        })
    }
}

/* admin login details */
exports.admin_login_data = async (req, res) => {
    var admin_id = await storage.getItem('admin_id');
    console.log(admin_id)
    var data = await loginmodel.findById(admin_id);
    res.status(200).json({
        status: "admin login details",
        data
    })
}

/* admin logout */
exports.admin_logout = async (req, res) => {
    await storage.removeItem('admin_id');
    res.status(200).json({
        status: "admin logout"
    })
}
