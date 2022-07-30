import { bootstrapMicroframework } from 'microframework'
import config from './config'
import { expressLoader } from './loader/expressLoader'
import { mongooseLoader } from './loader/mongooseLoader'
import logger from './util/logger'

bootstrapMicroframework({
  loaders: [expressLoader, mongooseLoader],
})
  .then(() => logger.info({ event: 'initializeApp', message: 'Application is up and running '}))
  .catch((error) => logger.error({ event: 'appCrashed', message: `Application is crashed ${error}`}))
