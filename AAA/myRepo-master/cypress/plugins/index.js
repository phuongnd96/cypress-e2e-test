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
      return 'abc';
    },
    writeFile(filePath,content) {
      console.log('abc');
       return fs.writeFile(filePath,
       content,function(err){
         if (err){
         console.log(err);
       }else{
         console.log('abcs')
       }
      })
    }
  })
};
