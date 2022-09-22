export default async function (req, res) {
  const nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  })
  const mailData = {
    from: process.env.NEXT_PUBLIC_MAIL_ADDRESS,
    to: req.body.email,
    subject: `TutorChase Enquiry`,
    text: 'Thank you for contacting TutorChase. Your enquiry has just been sent to one our academic consultants. They will very shortly be in touch to help find you the perfect tutor to best suit your needs. The TutorChase Team',

    html: `<p>Thank you for contacting TutorChase. Your enquiry has just been sent to one our academic consultants.
    They will very shortly be in touch to help find you the perfect tutor to best suit your needs.</p>
    <p>The TutorChase Team</p>`,
  }

  transporter.sendMail(mailData, function (err) {
    if (err) {
      console.log(err)
    }
  })
  res.status(200).end()
}
