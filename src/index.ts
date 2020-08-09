import * as express from 'express';
import { GraphQLSchema } from 'graphql';
import { queryType } from '@/fields/';

const graphqlHTTP = require('express-graphql').graphqlHTTP;


const PORT = 4000;
const app = express();

const schema = new GraphQLSchema({
  query: queryType
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
  }));

app.listen(PORT, () => console.log('Listening on :4000'));