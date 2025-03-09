
import { envs } from "./config/envs.js";
import http from "http";
import {expressMiddleware} from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from "cors";
import express from "express";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "@apollo/server";
import {gql} from "graphql-tag";
import  resolvers  from "./schemas/graphql/resolvers/index.js";
import { mongodb } from "./schemas/mongo/connection.js";
import "./schemas/graphql/resolvers/index.js";
import schemas from "./schemas/graphql/schemas/index.js";
const app = express();
const httpServer = http.createServer(app);

mongodb()

const typeDefs = gql(schemas);
const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
    schema: buildSubgraphSchema({ typeDefs, resolvers })
})
await apolloServer.start();

app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(apolloServer,{
    context: async({req}) => ({token: req.headers.token})
    }),
);
app.listen(envs.port,()=>{
    console.log('listening on port', envs.port);
})

httpServer.listen({port: envs.apollo_server_port},()=>{
    console.log('apollo server running on ' + envs.apollo_server_port)
})

