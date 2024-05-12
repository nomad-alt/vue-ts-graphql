"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = require("@graphql-yoga/node");
var schema_1 = require("@graphql-tools/schema");
var client_1 = require("@prisma/client");
var schema_2 = require("./schema"); // Import your schema definitions
// Initialize Prisma client
var prisma = new client_1.PrismaClient();
var schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: schema_2.typeDefs,
    resolvers: schema_2.resolvers,
    plugins: [{ usePlugin: require('@pothos/plugin-prisma').default, config: { prisma: prisma } }],
});
var server = (0, node_1.createServer)({ schema: schema });
server.start().then(function () {
    console.log(' Server ready at http://localhost:4000');
});
