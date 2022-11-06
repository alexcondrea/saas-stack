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
}
