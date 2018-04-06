const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.use( bodyParser.json() );

const port = 3006;
app.listen( port, () => { console.log(`Skinwalkers are listening on port ${port}.`); } );