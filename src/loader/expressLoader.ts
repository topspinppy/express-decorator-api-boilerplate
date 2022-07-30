import bodyParser from "body-parser";
import express, { Express } from "express";
import { register } from "../util/registerRoute";
import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import path from "path";
import config from "../config";
import logger from "../util/logger";


export const expressLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  const app: Express = express();
  
  app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }))
  app.use(bodyParser.json({
    type: '*/*',
    limit: '80mb'
  }))

  /* Register route */
  register(app, path.resolve(__dirname, "../controllers"), '.controller.ts')

  app.listen(config.all.port, () => {
    logger.info({ event: 'expressLoader', message: `Server listening on port ${config.all.port}`})
  })
}
