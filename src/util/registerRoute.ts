import * as fs from 'fs'
import { Express } from 'express'
import { attachControllers, Type } from '@decorators/express'

function getFiles(dir: string, files_: Array<any>): Array<String> {
  files_ = files_ || []
  const files = fs.readdirSync(dir)
  for (let i in files) {
    const name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_)
    } else {
      files_.push(name)
    }
  }
  return files_
}

export async function register(
  app: Express,
  controllersDir: string,
  extension = '.ts'
): Promise<void> {
  const controllers: Type[] = []
  getFiles(controllersDir, []).forEach((file: any) => {
    if (file.endsWith(extension)) {
      const fileControllers = require(file)
      controllers.push(fileControllers.default)
    }
  })
  attachControllers(app, controllers)
}
