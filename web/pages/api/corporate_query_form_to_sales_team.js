export default function (req, res) {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ADDRESS_GMAIL,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD_GMAIL,
    },
  })
  const mailData = {
    from: process.env.NEXT_PUBLIC_MAIL_ADDRESS_GMAIL,
    to: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
    subject: `TutorChase "Enquire Now"`,
    text:
      'Organization: ' +
      req.body.organization +
      'Full name: ' +
      req.body.fullName +
      'Country: ' +
      req.body.country +
      'Phone: ' +
      req.body.phone +
      'Email: ' +
      req.body.email +
      'Details of Request: ' +
      req.body.requestDetails +
      'The page from which the form was submitted: ' +
      req.body.source +
      'GCLID (Google Click Identifier): ' +
      req.body.gclidValue +
      'Date and time of the application: ' +
      req.body.time,
    html: `<p><b>Organization:</b><br/> ${req.body.organization}</p>
    <p><b>Full name:</b><br/> ${req.body.fullName}</p>
    <p><b>Country:</b><br/> ${req.body.country}</p>
    <p><b>Phone:</b><br/> ${req.body.phone}</p>
    <p><b>Email:</b><br/> ${req.body.email}</p>
    <p><b>Details of Request:</b><br/> ${req.body.requestDetails}</p>
    <p><b>The page from which the form was submitted:</b><br/> ${req.body.source}</p>
    <p><b>GCLID (Google Click Identifier):</b><br/> ${req.body.gclidValue}</p>
    <p><b>Date and time of the application:</b><br/> ${req.body.time}</p>`,
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
