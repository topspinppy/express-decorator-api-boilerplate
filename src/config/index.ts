import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config()

const config = {
  all: {
    appName: process.env.APP_NAME,
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    port: process.env.PORT || 9000,
    mongo: {
      uri: process.env.DB_URI || '',
    }
  },
  test: { },
  development: {
    mongo: {
      uri: process.env.DB_URI,
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || undefined,
    port: process.env.PORT || 8080,
    mongo: {
      uri: process.env.DB_URI
    }
  }
}

export default config