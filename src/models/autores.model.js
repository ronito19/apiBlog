const db = require('../config/db');
const axios = require('axios');

// SELECT * FROM apiblog/autores;
const selectAll = async (page, limit) => {
    const [result] = await db.query(`
        select * from apiblog.autores
        limit ?
        offset ?
    `, [limit, (page - 1) * limit]);
    return result;
}


/**
 * Obtiene un autor por su ID.
 * 
 * @async
 * @function selectById
 * @param {number} autorId - El ID del autor que se desea obtener.
 * @returns {Promise<Object|null>} Un objeto con los datos del autor si se encuentra, o `null` si no existe.
 * 
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */
const selectById = async (autorId) => {
    const [result] = await db.query('select * from apiblog.autores where id = ?', [autorId]);
    if (result.length === 0) return null;

    const autor = result[0];
    // Convertir imagen a Base64
    if (autor.imagen) {
        autor.imagen = autor.imagen.toString('base64');
    }

    return result[0];
};


const insert = async ({ nombre, email, imagen }) => {
    // Descarga la imagen desde la URL
    const response = await axios.get(imagen, { responseType: 'arraybuffer' });
    const bufferImagen = Buffer.from(response.data);

    const [result] = await db.query(`
        insert into apiblog.autores (nombre, email, imagen) values (?, ?, ?)
    `, [nombre, email, bufferImagen]);
    return result;
}


module.exports = { selectAll, selectById, insert };