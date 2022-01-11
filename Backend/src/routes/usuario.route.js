const { Router } =require('express');
const router = Router();

//controller
const { usersAll, userByName,userById, postUsuario } =require('../controllers/usuario.controller')


//routes
router.get('/all', usersAll)
router.get('/name/:name', userByName)
router.get('/byId/:id', userById)
router.post('/create', postUsuario)

module.exports = router