import { MicroframeworkLoader, MicroframeworkSettings } from "microframework";
import mongoose from "mongoose"
import config from "../config";
import logger from "../util/logger";


export const mongooseLoader: MicroframeworkLoader = (settings: MicroframeworkSettings | undefined) => {
  mongoose.connect(config.all.mongo.uri).then(() => {
    logger.info({ event: 'mongooseLoader', message: `Connect mongodb database successfully`})
  })
}
