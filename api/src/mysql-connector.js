import fastifyPlugin from 'fastify-plugin'
import fastifyMySQL from '@fastify/mysql'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector (fastify, options) {
  fastify.register(fastifyMySQL, {
    promise: true,
    connectionString: 'mysql://root:root@db/saas'
  })
}

export default fastifyPlugin(dbConnector)
