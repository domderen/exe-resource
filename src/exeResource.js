import childProcess from 'child_process';
import es6Promise from 'es6-promise';
import path from 'path';

es6Promise.polyfill();

export default (executablePath, {fileVersion, productVersion, companyName, fileDescription, legalCopyright, productName}) => {
  return new Promise((resolve, reject) => {
    let args = [executablePath];

    if(fileVersion !== undefined) {
      args.push(fileVersion);
    }

    if(productVersion !== undefined) {
      args.push(...['/pv', productVersion]);
    }

    if(companyName !== undefined) {
      args.push(...['/s', 'company', companyName]);
    }

    if(fileDescription !== undefined) {
      args.push(...['/s', 'desc', fileDescription]);
    }

    if(legalCopyright !== undefined) {
      args.push(...['/s', '(c)', legalCopyright]);
    }

    if(productName !== undefined) {
      args.push(...['/s', 'product', productName]);
    }

    if(args.length === 1) {
      return reject(new Error('No parameters provided. Please provide parameters to modify in the executable file.'));
    }

    childProcess.execFile(path.resolve(__dirname, '..', 'external', 'verpatch.exe'), args, (error, stdout) => {
      if(error) {
        return reject(new Error(`Modification command failed with exit code ${error.code} and output: ${stdout}`));
      }

      return resolve();
    });
  });
}
