import Fastify from "fastify";
import routes from "./routes/index.js";
import config from "./config/env.config.js";
import dbConfigString from "./config/db.config.js";
import dbConnector from "./plugins/databaseConnector.js";
import oauthPlugin from "./plugins/oauthPlugin.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(dbConnector);
fastify.register(oauthPlugin);

fastify.register(import("@fastify/cors"), {
  origin: "*",
});

fastify.register(routes, { prefix: "/api" });

const start = async () => {
  try {
    await fastify.listen({ port: config.PORT, host: config.HOST });
    console.log(`Server is running at PORT ${config.PORT}`);
    console.log(`Server is running at HOST ${config.HOST}`);
    console.log(`Database is running at ${dbConfigString}`);
  } catch (err) {
    console.log(err)
    fastify.log.error(err);
    process.exit(1);
  }
}

start()