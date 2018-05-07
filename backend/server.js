import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express'; 
import { graphiqlExpress } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';

import schema from './schema';

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost/gqlserver');

const connection = mongoose.connection;
connection.once('open',() => {
    console.log('mongo db estb success');
});

app.use('/graphiql',graphiqlExpress({endpointURL: 'graphql'}));
app.use('/graphql' , bodyParser.json() , graphqlExpress({schema}));

app.listen(4000, () => console.log('server running on port 4000'));