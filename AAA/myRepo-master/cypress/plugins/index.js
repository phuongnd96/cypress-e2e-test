/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
const XLSX = require('xlsx');
const fs = require('fs');
const nodemailer = require('nodemailer');
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
          let sortedbyDate = dirList.slice(0);
          sortedbyDate.sort(function (elem1, elem2) {
            return elem1.createdDate.localeCompare(elem2.createdDate);
          });
          resolve(sortedbyDate[sortedbyDate.length - 1].fileName);
        })
      })
    },
    deleteFile(path) {
      return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
          if (err) {
            reject(err)
            return
          }
          console.log('success');
          resolve(path);
        })
      })
    },
    findFile(fileName1) {
      return new Promise((resolve, reject) => {
        fs.readdir('C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures', (e, files) => {
          if (e) {
            reject(e);
          }
          files.forEach((file) => {
            if (file.includes(fileName1) == true) {
              console.log(file);
              resolve(`${file}`);
            }
          })
        })
      })
    },
    renameFile(path) {
      if (fs.existsSync(path[0])) {
        fs.renameSync(path[0], path[1]);
        return null;
      }
      else {
        return 'fail';
      }
    },
    sendEmail(dir) {

      // let dir = "C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\Log";
      let attachmentsList = [];
      async function findFile() {
        return new Promise((resolve, reject) => {
          fs.readdir(dir, (e, files) => {
            if (e) {
              reject(e);
            };
            files.forEach((file) => {
              console.log(dir + file);
              attachmentsList.push(
                { "path": `${dir}\\${file}`}
              )
            })
            resolve(attachmentsList);
          });
        })
      };

      return findFile().then((list) => {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'nguyenduyphuong_t59@hus.edu.vn',
            pass: 'phuOng1996'
          }
        });
        const mail = {
          from: 'nguyenduyphuong_t59@hus.edu.vn',
          to: 'p.be0.duyphuong@gmail.com',
          subject: "Test Result SMSMKT1",
          html: `<h1><b>Test Result SMSMKT1</b></h1>`
          , attachments: list
        };
        transporter.sendMail(mail, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
        return list;
      })
      
    }
  })
};
