export default function (req, res) {
  //   require('dotenv').config()

  const nodemailer = require('nodemailer')
  const SMTPConnection = require('nodemailer/lib/smtp-connection')
  let connection = new SMTPConnection()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ADDRESS_FROM,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
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
    html: `<p><b>Position:</b><br/> ${req.body.position}</p>
    <p><b>Full name:</b><br/> ${req.body.fullName}</p>
    <p><bCountry:</b><br/> ${req.body.country}</p>
    <p><b>Phone:</b><br/> ${req.body.phone}</p>
    <p><b>Email:</b><br/> ${req.body.email}</p>
    <p><b>Details of Tutoring Request:</b><br/> ${req.body.details}</p>
    <p><b>Frequency and Duration of Tuition:</b><br/> ${req.body.frequencyDuration}</p>`,
  }
  transporter.sendMail(mailData, function (err) {
    if (err) {
      console.log(err)
    } else {
      connection.quit()
    }
  })
  res.status(200)
}
