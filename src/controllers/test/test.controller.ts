import { Response, Controller, Get } from '@decorators/express';
import { Injectable } from '@decorators/di';

@Controller('/api')
@Injectable()
class TestController {
  @Get('/test')
  async test(@Response() res: any) {
    res.send({
      status: 200,
    })
  }
}

export default TestController
