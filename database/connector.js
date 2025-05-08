import fastifyPostgres from "@fastify/postgres";
import fp from 'fastify-plugin'; 
import dbConfigString from "./../config/db.config.js";

const dbConnector = async (fastify, options) => {
  fastify.register(fastifyPostgres, {
    connectionString: dbConfigString,
  });

  fastify.decorate("db", async (query, params) => {
    const client = await fastify.pg.connect();
    try {
      const result = await client.query(query, params);
      return result.rows;
    } catch (err) {
      fastify.log.error(err);
      throw err;
    } finally {
      client.release();
    }
  });
}

export default fp(dbConnector)