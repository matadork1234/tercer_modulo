const pg = require('pg');

const connection = (config) => {

    try {
        const conn = new pg.Client(config);
        return conn;
    } catch (error) {
        console.error(error);
    }

}

module.exports = {
    connection
}