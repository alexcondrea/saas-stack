import Fastify from 'fastify'
import mysqlConnector from './mysql-connector.js'
import generalRoutes from './routes/general.routes.js'

const app = Fastify({ logger: true })

app.register(mysqlConnector)
app.register(generalRoutes)

app.listen({ host: 'api', port: 80 }, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
