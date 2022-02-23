const express = require('express')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const context = require('./context')

async function startServer() {
  const app = express()

  await mongoose.connect('mongodb+srv://backendTop16:a4b3c2d1@cluster0.q3p1w.mongodb.net/graphql?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  console.log('Connected to MongoDB')
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

