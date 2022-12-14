export default async function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  })
  const mailData = {
    from: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
    to: req.body,
    subject: `TutorChase Tutor Application`,
    text: 'Thank you for your application. We aim to respond to successful applicants within two weeks. The TutorChase Team',

    html: `<p>Thank you for your application. We aim to respond to successful applicants within two weeks.</p>
    <p>The TutorChase Team</p>`,
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log('Error ' + err)
    } else {
      res.status(200)
      res.send(`Email sent`)
    }
  })
}
