const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port:'3306',
    database: 'usuariosDB'
});


async function traerUsuarios() {
    const result = await connection.query('SELECT * FROM usuarios');
    return result[0];
}


async function traerUsuario(usuario) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ?', usuario);
    return result[0];
}


async function validarUsuario(usuario, password) {
    const result = await connection.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password]);
    return result[0];
}


async function crearUsuario(nombre, email, usuario, password) {
    const result = await connection.query('INSERT INTO usuarios VALUES(?,?,?,?)', [nombre, email, usuario, password]);
    return result;
}


async function actualizarUsuario(query, values) {
    const result = await connection.query(query, values);
    return result;
}



async function borrarUsuario(usuario) {
    const result = await connection.query('DELETE FROM usuarios WHERE usuario = ?', [usuario]);
    return result[0];
}


module.exports = {
    traerUsuarios, traerUsuario, validarUsuario, crearUsuario, actualizarUsuario, borrarUsuario
};






