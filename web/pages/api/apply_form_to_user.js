export default async function (req, res) {
  //   require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ADDRESS_FROM,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
    secure: true,
  })
  const mailData = {
    from: process.env.NEXT_PUBLIC_MAIL_ADDRESS_FROM,
    to: req.body,
    subject: `TutorChase Tutor Application`,
    text: 'Thank you for your application. We aim to respond to successful applicants within two weeks. The TutorChase Team',

    html: `<p>Thank you for your application. We aim to respond to successful applicants within two weeks.</p>
    <p>The TutorChase Team</p>`,
  }

  transporter.sendMail(mailData, function (err) {
    if (err) console.log(err)
  })
  res.status(200)
}
