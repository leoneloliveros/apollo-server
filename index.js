const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const context = require('./context')

async function startServer() {
  const app = express()

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context
  })

  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.use((req, res) => res.send('Hello world'))

  app.listen({ port: 4000 }, () => console.log('server is UP'))

}

setImmediate(startServer)

