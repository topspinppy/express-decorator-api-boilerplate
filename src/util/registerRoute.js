import * as fs from 'fs'
import * as web from 'express-decorators'


function getFiles(dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (let i in files) {
      const name = dir + '/' + files[i];
      if (fs.statSync(name).isDirectory()) {
          getFiles(name, files_);
      }
      else {
          files_.push(name);
      }
  }
  return files_;
}


export function register(app, controllersDir, extension = '.js') {
  getFiles(controllersDir).forEach((file) => {
      if (file.endsWith(extension)) {
        let fileControllers = require(file);
        web.register(app, new fileControllers);
      }
  });
}
