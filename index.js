require ('dotenv').config();

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { Person } = require('./server/model')
const schema = require('./server/schema')
const resolvers = require('./server/resolvers');

app.use(cors());

mongoose.connect('mongodb://pixelspy:soleilmahana10@ds157528.mlab.com:57528/herokutest');

const execSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

app.use('/graphql', express.json(), graphqlExpress({ schema: execSchema, context: { Person }}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}))

app.use('/', express.static(__dirname + '/front/build'))

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/front/build/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('Connected!')
})
