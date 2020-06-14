const fs = require('fs');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'p.be0.duyphuong@gmail.com',
    pass: 'gicungduoc'
  }
});
let dir = "C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\Log";
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

findFile().then((list) => {
  var mail = {
    from: 'p.be0.duyphuong@gmail.com',
    to: 'nguyenduyphuong_t59@hus.edu.vn',
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
})
