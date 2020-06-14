const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'p.be0.duyphuong@gmail.com',
        pass: 'gicungduoc'
    }
});

var mail = {
    from: 'p.be0.duyphuong@gmail.com',
      to: 'nguyenduyphuong_t59@hus.edu.vn',
    // to: 'mxxh0621@naver.com',
    subject: 'Sending Email using Node.js',
    text: 'Test Nodemailer',
    html: `<b>Hello world?</b>
  <div>Send by nodejs</div>
  `
    , attachments: [
        {path: 'C:\\Users\\LapTop\\Desktop\\AAA\\myRepo-master\\cypress\\fixtures\\Log\\logcreatetempCSKH_1280095.txt'}
        // { path: 'C:\\Users\\LapTop\\Desktop\\VPN\\Sau tất cả-AEON Long biên 31012020.aac' }
    ]
};

let message = {
    from: 'p.be0.duyphuong@gmail.com',
    to: 'nguyenduyphuong_t59@hus.edu.vn',
    subject: 'AMP4EMAIL message',
    text: 'For clients with plaintext support only',
    html: '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
    amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`
}

transporter.sendMail(mail, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});