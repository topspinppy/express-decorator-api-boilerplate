import { bootstrapMicroframework } from 'microframework'
import { expressLoader } from './loader/expressLoader'
import logger from './util/logger'

bootstrapMicroframework({
  loaders: [expressLoader],
})
  .then(() => logger.info({ event: 'initializeApp', message: 'Application is up and running '}))
  .catch((error) => logger.error({ event: 'appCrashed', message: `Application is crashed ${error}`}))
