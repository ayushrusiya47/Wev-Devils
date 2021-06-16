const { Client } = require('pg')

const client = new Client(`postgres://fhpcrzhr:ukB1mYKGS1SVX2kBbBVYtHALnKbtIzlp@john.db.elephantsql.com/fhpcrzhr`);
module.exports = client;