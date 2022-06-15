require('dotenv').config()
require('colors')

const express = require('express')
const connectDB = require('./config/db')
const schema = require('./schema/schema')

const app = express()
connectDB()

const { graphqlHTTP } = require('express-graphql')
app.use('/graphql', graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' }))

const port = process.env.PORT || 1010
app.listen(port, console.log(`Server running on port ${port}`));
