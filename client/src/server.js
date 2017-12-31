import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
  }));