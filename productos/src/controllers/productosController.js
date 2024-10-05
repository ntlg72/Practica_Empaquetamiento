const { Router } = require('express');
const router = Router();
const productosModel = require('../models/productosModel');



router.get('/productos', async (req, res) => {
    var result;
    result = await productosModel.traerProductos() ;
    //console.log(result);
    res.json(result);
});


router.get('/productos/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await productosModel.traerProducto(id) ;
    //console.log(result);
    res.json(result[0]);
});


router.post('/productos', async (req, res) => {
    const nombre = req.body.nombre;
    const precio = req.body.precio;
    const inventario = req.body.inventario;
    
    var result = await productosModel.crearProducto(nombre, precio, inventario);
    res.send("producto creado");
});


router.put('/productos/:id', async (req, res) => {
    const id = req.params.id;
    const { nombre, precio, inventario } = req.body;

    // Construir la consulta condicionalmente
    let updateFields = [];
    let updateValues = [];

    if (nombre) {
        updateFields.push("nombre = ?");
        updateValues.push(nombre);
    }
    if (precio) {
        updateFields.push("precio = ?");
        updateValues.push(precio);
    }
    if (inventario) {
        updateFields.push("inventario = ?");
        updateValues.push(inventario);
    }

    // Solo realizar el update si hay campos para actualizar
    if (updateFields.length > 0) {
        const query = `UPDATE productos SET ${updateFields.join(', ')} WHERE id = ?`;
        updateValues.push(id);

        try {
            const result = await productosModel.actualizarProducto(query, updateValues);
            
            if (result.affectedRows === 0) {
                return res.status(404).send("Producto no encontrado.");
            }

            res.send("Producto actualizado exitosamente.");
        } catch (error) {
            res.status(500).send("Error al actualizar el producto.");
        }
    } else {
        res.status(400).send("No se han proporcionado campos para actualizar.");
    }
});


router.delete('/productos/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await productosModel.borrarProducto(id) ;
    //console.log(result);
    res.send("producto borrado");
});




module.exports = router;