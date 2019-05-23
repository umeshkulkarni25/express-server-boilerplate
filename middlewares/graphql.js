import expressGraphQL from 'express-graphql';

import { Schema } from '../schema';

const GRAPHQL_MIDDLEWARE = expressGraphQL(req => ({
  schema: Schema,
  context: {
    jwt: (req.user || {}),
    ip: req.headers['x-real-ip'] | req.headers['Remote_Addr'] | req.headers["HTTP_X_FORWARDED_FOR"],
    useragent: req.headers['user-agent']
  },
  rootValue: { request: req },
  graphiql: true,
  pretty: true
}))

export default GRAPHQL_MIDDLEWARE;
