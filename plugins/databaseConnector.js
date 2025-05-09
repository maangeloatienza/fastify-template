import fastifyPostgres from "@fastify/postgres";
import fp from 'fastify-plugin'; 
import dbConfigString from "../config/db.config.js";

const dbConnector = async (fastify, options) => {
  fastify.register(fastifyPostgres, {
    connectionString: dbConfigString,
  });
}

export default fp(dbConnector)