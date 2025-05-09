const routes = async (fastify, options) => {
  // Example route with async/await
  fastify.get("/", async (request, reply) => {
    try {
      const data = await await fastify.pg.query('SELECT * FROM users');

      return reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
          message: "Query executed successfully",
          data: data.rows,
        });
    } catch (err) {
      console.error("Error executing query:", err);

      return reply
        .code(500)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
          error: "Error executing query",
          message: err.message,
        });
    }
  });

  fastify.get("/login", async (request, reply) => {

  })

};

export default routes;