import * as bunyan from 'bunyan'

const options: bunyan.LoggerOptions = {
  name: "app",
  stream: process.stderr,
  level: "debug"
}
const logger = bunyan.createLogger(options)

export default logger
