const mongoose = require( 'mongoose' );

const ConsultaSchema = new mongoose.Schema({
    titulo : { type: String, require: true },
    imgUrl : { type: String, require: true }
});

module.exports = mongoose.model( 'consulta', ConsultaSchema )