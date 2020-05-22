/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
const XLSX = require('xlsx');
const fs = require('fs');
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    readFile(filename) {

      if (fs.existsSync(filename)) {
        return XLSX.readFile(filename)
      }
      return 'no file:' + filename;
    },
    writeFile(filePath, content) {
      console.log('abc');
      return fs.writeFile(filePath,
        content, function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log('abcs')
          }
        })
    },
    findResultFile(dir) {
      function createdDate(file) {
        const { birthtime } = fs.statSync(file)
        return birthtime.toLocaleDateString() + " " + birthtime.toLocaleTimeString();
      }
      let dirList = [];
      return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (e, files) {
          if (e) {
            reject(e);
          }
          files.forEach(function (file) {
            if (/template_uploaded/.test(file) === true) {
              dirList.push({
                fileName: dir + file
                , createdDate: createdDate(dir + file)
              });
            }
          });
          const sortedbyDate = dirList.slice(0);
          sortedbyDate.sort(function (a, b) {
            return b.createdDate.localeCompare(a.createdDate);
          });
          resolve(sortedbyDate[0].fileName);
        })
      })
    }
  })
};
