import { ApolloServer } from 'apollo-server-micro'
import { getSession } from "next-auth/client"
import { schema } from '../../lib/schema'

const apolloServer = new ApolloServer({ 
  schema,
  context: async ({ req }) => {
    const session = await getSession({ req });
    return { session };
  }, 
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
