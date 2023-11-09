const express = require( 'express' );
const dotenv = require( 'dotenv' );
const mongoose = require( 'mongoose' );
const app = express();
const consultaRouter = require( './routes/consulta' );
const port = 3000;

dotenv.config();
mongoose.connect( process.env.MONGO_URL ).then( () => console.log( 'BD Conectada ...' ) ).catch( ( error ) => console.log( error) );

app.use( express.json( { limit: '10mb' } ) );
app.use( express.urlencoded( { limit: '10mb', extended: true } ) );

app.use( '/api/consulta/', consultaRouter );

app.listen( process.env.PORT || port, () => console.log( `Example app listening on port ${ process.env.PORT }!` ) );