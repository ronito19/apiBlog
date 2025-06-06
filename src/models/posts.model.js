const db = require('../config/db');

// SELECT * FROM apiblog/posts;
const selectAll = async (page, limit) => {
    const [result] = await db.query(`
        select * from apiblog.posts
        limit ?
        offset ?
    `, [limit, (page - 1) * limit]);
    return result;
}


/**
 * Obtiene un post por su ID.
 * 
 * @async
 * @function selectById
 * @param {number} postId - El ID del post que se desea obtener.
 * @returns {Promise<Object|null>} Un objeto con los datos del post si se encuentra, o `null` si no existe.
 * 
 * @throws {Error} Si ocurre un error durante la consulta a la base de datos.
 */
const selectById = async (postId) => {
    const [result] = await db.query('SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria, autores.id AS autores_id, autores.nombre AS autor_nombre, autores.email AS autor_email, autores.imagen AS autor_imagen FROM posts JOIN autores ON posts.autores_id = autores.id WHERE posts.id = ?', [postId])
    if (result.length === 0) return null;
    return result[0];
}


const insert = async ({ titulo, descripcion, fecha_creacion, categoria }) => {
    const [result] = await db.query(`
        insert into apiblog.posts (titulo, descripcion, fecha_creacion, categoria) values (?, ?, ?, ?)
    `, [titulo, descripcion, fecha_creacion, categoria]);
    return result;
}


const selectByAuthor = async (autorId) => {
    const [result] = await db.query(`
        SELECT posts.id, posts.titulo, posts.descripcion, posts.fecha_creacion, posts.categoria
        FROM posts
        WHERE posts.autores_id = ?
        `, [autorId]);
    return result;
}


module.exports = { selectAll, selectById, insert, selectByAuthor };