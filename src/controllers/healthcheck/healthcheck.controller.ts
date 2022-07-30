import { Response, Controller, Get } from '@decorators/express';
import { Injectable } from '@decorators/di';

@Controller('/api')
@Injectable()
class HealthCheckController {
  @Get('/healthcheck')
  async healthCheck(@Response() res: any) {
    res.send({
      status: 200,
    })
  }
}

export default HealthCheckController
