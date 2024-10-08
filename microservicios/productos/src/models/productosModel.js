const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'root',
    port:'3306',
    database: 'almacenDB'
});


async function traerProductos() {
    const result = await connection.query('SELECT * FROM productos');
    return result[0];
}
async function traerProducto(id) {
    const result = await connection.query('SELECT * FROM productos WHERE id = ?', id);
    return result[0];
}


async function actualizarProducto(query, values) {
    try {
        const [result] = await connection.query(query, values);
        return result;
    } catch (error) {
        throw new Error(`Error en la consulta: ${error.message}`);
    }
}


async function crearProducto(nombre, precio, inventario) {
    const result = await connection.query('INSERT INTO productos VALUES(null,?,?,?)', [nombre, precio, inventario]);
    return result;
}


async function borrarProducto(id) {
    const result = await connection.query('DELETE FROM productos WHERE id = ?', id);
    return result[0];
}


module.exports = {
    traerProductos, traerProducto, actualizarProducto, crearProducto,  borrarProducto
}
