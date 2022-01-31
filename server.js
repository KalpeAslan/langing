import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'

const PORT = 8080
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


const EMAIL_LOGIN = 'support@dexoo.io'
const EMAIL_PASSWORD = 'Dexoo2022'
const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_LOGIN, // generated ethereal user
        pass: EMAIL_PASSWORD, // generated ethereal password
    },
});

app.post('/send-question', (req, res) => {
    transporter.sendMail({
        from: 'support@dexoo.io', // sender address
        to: "support@dexoo.io", // list of receivers
        subject: `Dexoo Landing Question from ${req.body.firstName} ${req.body.email} `, // Subject line
        text: req.body.question, // plain text body
        // html: "<b>Hello world?</b>", // html body
    });
    res.send('Question Sent').status(200)
})

console.log('Dexoo running at PORT: ' + PORT)

app.listen(PORT)