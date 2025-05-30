const db = require('../config/db');

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
    const [result] = await db.query('select * from autores where id = ?', [autorId]);
    if (result.length === 0) return null;
    return result[0];
}


module.exports = { selectAll, selectById };