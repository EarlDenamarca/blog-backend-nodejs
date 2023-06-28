const express = require( 'express' )
const dotenv = require( 'dotenv' ).config()
const port =  process.env.PORT

const app = express()
const routes = require( './routes' )

app.use(routes);

app.listen( port, () => console.log( `Server running in port ${port}` ) )