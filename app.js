const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const nodemailer = require("nodemailer");
const { wrapper } = require('./views/wrapper');
const bodyParser = require('body-parser');
require('dotenv').config()

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/views/assets/js'));
app.use(express.static(__dirname + '/views/assets/css'));
app.use(express.static(__dirname + '/views/assets/img/Little Jordan'));
app.use(express.static(__dirname + '/views/assets/img/logos'));
app.use(express.static(__dirname + '/views/assets/pdf'));
app.use(express.static(__dirname + '/views/assets/img/assets'));
app.use(bodyParser());
app.all('/api/sendEmail', (req, res) => {
    console.log(req.body);
    const { firstName, lastName, subject, message } = req.body;

    let auth = {
        user: process.env.GMAIL_LOGIN,
        pass: process.env.GMAIL_PW
    }

    console.log(auth);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth
    });

    const mailOptions = {
        from: process.env.GMAIL_LOGIN,
        to: process.env.GMAIL_RECIPIENT,
        subject,
        html: `Message from: ${firstName} ${lastName}. <br/><br/> ${message}`
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);

        res.json({ success: true })
    });
})

app.get('*', (req, res) => {
    res.send(wrapper);
})

app.listen(port, () => console.log(`listening on port ${port}`));
