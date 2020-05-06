import * as web from 'express-decorators'

@web.basePath('/')
class HealthCheckController {
  @web.get('/')
  async healthCheck(request, response) {
    response.send({
      status: 200,
    })
  }
}

module.exports = HealthCheckController
