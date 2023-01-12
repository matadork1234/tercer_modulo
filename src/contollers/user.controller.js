const cn = require('../config/database');
const { Pool } = require('pg');

const config = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: parseInt(process.env.PGPORT, 10)
}

const conn = new Pool(config);

const getAllUsers = async (req, res) => {
    try {
        
        await conn.connect();
        const data = await conn.query("SELECT * FROM users");
        return res.send(data.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

const registerUser = async (req, res) => {
    const { fullname, age } = req.body;

    try {
        await conn.connect();
        var data = await conn.query(`INSERT INTO users VALUES(default,'${fullname}',${age})`);
        if (data.rowCount > 0) {
            return res.status(200).send({ message: 'Se registro correctamente el usuario' });
        } else {
            return res.status(404).send({ messge: 'No se pudo registrar el usuario, contactese con su administrador' })
        }

    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        await conn.connect();
        var user = await conn.query('SELECT * FROM users WHERE id=$1', [id]);
        if (user.rowCount > 0) {
            return res.status(200).send(user.rows);
        } else {
            return res.status(404).send({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { fullname, age } = req.body;

    try {
        await conn.connect();
        var user = await conn.query('UPDATE users SET fullname = $1, age = $2 Where id = $3', [fullname, age, id]);
        if (user.rowCount > 0) {
            return res.status(200).send('Se modificaron los datos del usuario seleccionado');
        } else {
            return res.status(404).send('No se pudo realizar la modificacion del usuario seleccionado');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await conn.connect();
        var user = await conn.query('DELETE FROM users WHERE id=$1', [ id ]);
        if (user.rowCount > 0) {
            return res.status(200).send('Se elimino correctamente al usuario');
        } else {
            return res.status(404).send('No se pudo eliminar el usuario selecciondo, contactese con el administrador');
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

const averageAge = async (req, res) => {
    try {
        await conn.connect();
        var data = await conn.query('SELECT AVG(age) as Promedio FROM users');

        if (data.rowCount)
            return res.status(200).send(data.rows);
        else
            return res.status(404).send('No se pudo realizar la operacion')

    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

module.exports = {
    getAllUsers,
    registerUser,
    getUserById,
    updateUser,
    deleteUser,
    averageAge
}

