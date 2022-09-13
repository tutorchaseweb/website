export default function (req, res) {
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
    to: process.env.NEXT_PUBLIC_MAIL_ADDRESS_TO,
    subject: `Message From ${req.body.fullName}`,
    text:
      'Position: ' +
      req.body.position +
      'Full name: ' +
      req.body.fullName +
      'Country: ' +
      req.body.country +
      'Phone: ' +
      req.body.phone +
      'Email: ' +
      req.body.email +
      'Details of Tutoring Request: ' +
      req.body.details +
      'Frequency and Duration of Tuition: ' +
      req.body.frequencyDuration,
    html: `<p>Position: ${req.body.position}</p>
    <p>Full name: ${req.body.fullName}</p>
    <p>Country: ${req.body.country}</p>
    <p>Phone: ${req.body.phone}</p>
    <p>Email: ${req.body.email}</p>
    <p>Details of Tutoring Request: ${req.body.details}</p>
    <p>Frequency and Duration of Tuition: ${req.body.frequencyDuration}</p>`,
  }
  transporter.sendMail(mailData, function (err) {
    if (err) console.log(err)
  })
  res.status(200)
}
