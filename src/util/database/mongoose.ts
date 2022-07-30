import * as mongoose from 'mongoose'
import logger from '../logger'

export default (uri: string, options: mongoose.CallbackWithoutResult) =>
  new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', (error) => reject(error))
      .on('close', () => logger.info({ event: 'execute' }, `database connection close.`))
      .once('open', () => resolve(mongoose.connections[0]))
    mongoose.connect(uri, options)
  })
