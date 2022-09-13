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
    to: process.env.NEXT_PUBLIC_MAIL_ADDRESS_TO,
    subject: `Message From ${req.body.fullName}`,
    text:
      'Full name: ' +
      req.body.fullName +
      'Email: ' +
      req.body.email +
      'Country: ' +
      req.body.country +
      'Phone: ' +
      req.body.phone +
      'How did you hear about us? ' +
      req.body.hearAboutUs +
      'Qualifications: ' +
      req.body.qualifications +
      'Tutoring Experience: ' +
      req.body.tutoringExperience +
      'Tutoring Offered: ' +
      req.body.tutoringOffered +
      'LinkedIn Profile URL: ' +
      req.body.linkedInUrl +
      'Referrer: ' +
      req.body.referrer,

    html: `<p><b>Full name:</b><br/> ${req.body.fullName}</p>
    <p><b>Email:</b><br/> ${req.body.email}</p>
    <p><b>Country:</b><br/> ${req.body.country}</p>
    <p><b>Phone:</b><br/> ${req.body.phone}</p>
    <p><b>How did you hear about us?</b><br/> ${req.body.hearAboutUs}</p>
    <p><b>Qualifications:</b><br/> ${req.body.qualifications}</p>
    <p><b>Tutoring Experience:</b><br/> ${req.body.tutoringExperience}</p>
    <p><b>Tutoring Offered:</b><br/> ${req.body.tutoringOffered}</p>
    <p><b>LinkedIn Profile URL:</b><br/> ${req.body.linkedInUrl}</p>
    <p><b>Referrer:</b><br/> ${req.body.referrer}</p></br>`,

    attachments: [
      {
        filename: req.body.fileName,
        path: 'http://localhost:3000/' + (await req.body.filePath),
      },
    ],
  }

  transporter.sendMail(mailData, function (err) {
    if (err) console.log(err)
  })
  res.status(200)
}
