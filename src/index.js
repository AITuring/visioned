// index.js
// This is the main entry point of our application
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 4000;
// GraphQL编制模式
const typeDefs = gql`
    type Query {
        hello: String
    }
`;
// 为模式字段提供解析函数
const resolvers = {
    Query: {
        hello: () => 'Hello'
    }
};

const app = express();
// 设置Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });
// 应用Apollo GraphQL中间件，路径设为/api
server.applyMiddleware({ app, path: '/api'});

app.listen(port, () => {
    return console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`)
})
