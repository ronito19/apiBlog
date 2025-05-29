const db = require('../config/db');

// SELECT * FROM apiblog/autores;
const selectAll = async () => {
    const [result] = await db.query('select * from apiblog.autores');
    return result;
}


module.exports = { selectAll };