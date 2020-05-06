import bunyan from 'bunyan'

const options = {
  name: 'emergency-mobileapp-api',
  streams: [
    {
      type: 'stream',
      stream: process.stdout,
      level: 'debug',
    },
  ],

  serializers: bunyan.stdSerializers,
}
const logger = bunyan.createLogger(options)

export default logger
