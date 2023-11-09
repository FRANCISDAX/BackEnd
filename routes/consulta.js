const router = require('express').Router();
const consultaController = require( '../controllers/consultaControllers' );

router.get( '/', consultaController.getAllConsulta );
router.get( '/search/:key', consultaController.searchCatalogo );
router.post( '/', consultaController.createConsulta );

module.exports = router