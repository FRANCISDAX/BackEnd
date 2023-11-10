const Consulta = require( '../models/Consulta' );

module.exports = {
    createConsulta: async ( req, res ) => {
        const newConsulta = new Consulta( req.body );
        try {
            await newConsulta.save();
            res.status( 200 ).json( 'Consulta creado satisfactoriamente ...' );
        } catch (error) {
            res.status( 500 ).json( 'Falló la creación de una Consulta ...' );
        }
    },

    getAllConsulta: async ( req, res ) => {
        try {
            const consulta = await Consulta.find(req.params);
            res.status(200).json( consulta )
        } catch (error) {
            res.status(500).json( 'Fallo en la Búsqueda de las Imágenes de Consultas ...' )
        }
    },

    searchConsulta: async ( req, res ) => {
        try {
            const result = await Consulta.aggregate(
                [
                    {
                      $search: {
                        index: "search",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json( result );
        } catch (error) {
            res.status(500).json( 'Fallo en la Búsqueda de las Imágenes ...' );           
        }
    },
}