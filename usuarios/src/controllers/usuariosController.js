const { Router } = require('express');
const router = Router();
const usuariosModel = require('../models/usuariosModel');


router.get('/usuarios', async (req, res) => {
    var result;
    result = await usuariosModel.traerUsuarios() ;
    res.json(result);
});


router.get('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;
    var result;
    result = await usuariosModel.traerUsuario(usuario) ;
    res.json(result[0]);
});


router.get('/usuarios/:usuario/:password', async (req, res) => {
    const usuario = req.params.usuario;
    const password = req.params.password;
    var result;
    result = await usuariosModel.validarUsuario(usuario, password) ;
    res.json(result);
});


router.post('/usuarios', async (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const usuario = req.body.usuario;
    const password = req.body.password;
    
    var result = await usuariosModel.crearUsuario(nombre, email, usuario, password);
    res.send("usuario creado");
});


router.put('/usuarios/:usuario', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const usuario = req.params.usuario;

    // Construir la consulta condicionalmente
    let updateFields = [];
    let updateValues = [];

    if (email) {
        updateFields.push("email = ?");
        updateValues.push(email);
    }
    if (password) {
        updateFields.push("password = ?");
        updateValues.push(password);
    }

    // Solo realizar el update si hay campos para actualizar
    if (updateFields.length > 0) {
        const query = `UPDATE usuarios SET ${updateFields.join(', ')} WHERE usuario = ?`;
        updateValues.push(usuario);

        var result = await usuariosModel.actualizarUsuario(query, updateValues);
        res.send("Usuario actualizado");
    } else {
        res.status(400).send("No se han proporcionado campos para actualizar.");
    }
});



router.delete('/usuarios/:usuario', async (req, res) => {
    const usuario = req.params.usuario;

    try {
        const result = await usuariosModel.borrarUsuario(usuario);
        
        // Verificar si alguna fila fue afectada
        if (result.affectedRows > 0) {
            res.send(`Usuario ${usuario} eliminado exitosamente.`);
        } else {
            res.status(404).send(`Usuario ${usuario} no encontrado.`);
        }
    } catch (error) {
        res.status(500).send("Error al eliminar el usuario.");
    }
});


module.exports = router;