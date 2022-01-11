const { Router } =require('express');
const router = Router();

//controller
const { getusuario } =require('../controllers/usuario.controller')


//routes
router.get('/', getusuario)
// router.post('/all', postUsuario)

module.exports = router