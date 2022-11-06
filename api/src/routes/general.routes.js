/**
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://www.fastify.io/docs/latest/Reference/Plugins/#plugin-options
 */
export default async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return reply.code(501).send()
  })
  fastify.get('/health', async (request, reply) => {
    return '👍'
  })
  fastify.get('/info', async (request, reply) => {
    try {
      const [rows] = await fastify.mysql.query('select type, value from app_info')
      fastify.log.debug('Got data from table app_info', rows)
      reply.send(rows)
    } catch (err) {
      fastify.log.error(err)
      reply.code(500).send()
    }
  })
}
