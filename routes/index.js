const routes = async (fastify, options) => {
  // Example route with async/await
  fastify.get("/", async (request, reply) => {
    try {
      const [rows] = await await fastify.mysql.query('SELECT * FROM Users');

      return reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({
          message: "Query executed successfully",
          data: rows,
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

};

export default routes;