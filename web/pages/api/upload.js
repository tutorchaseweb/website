import express from 'express'
import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    console.log('myFile', file)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  },
})

const upload = multer({ storage: storage }).single('myFile')

const app = express()

app.use(express.static('./public'))

app.get('/', (req, res) => res.render('index'))

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render('index', {
        msg: res,
      })
    } else {
      console.log(req.file)
      res.send('test')
    }
  })
})
