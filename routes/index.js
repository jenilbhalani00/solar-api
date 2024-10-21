var express = require('express');
var router = express.Router();
var register = require('../controller/register')
var login = require('../controller/login')

router.post('/',register.register)
router.get('/',register.register_data)

router.get('/logout',login.admin_logout)
router.get('/login',login.admin_login_data)
router.post('/login',login.admin_login)

router.get('/delete/:id',register.delete)
router.get('/u_data/:id',register.id_data)
router.post('/update/:id',register.update)


module.exports = router;
