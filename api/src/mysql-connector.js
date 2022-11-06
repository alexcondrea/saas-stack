import fastifyPlugin from 'fastify-plugin'
import fastifyMySQL from '@fastify/mysql'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector (fastify, options) {
  fastify.register(fastifyMySQL, {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'saas'
  })
}

export default fastifyPlugin(dbConnector)
