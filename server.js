// // laster inn all node.js modulene
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const md5 = require('md5')
// definerer porten jeg skal bruke
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));
const mysql = require('mysql');
// test databasen
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'server',
  password: 'serverpass',
  database: 'koppodev'
});

// connecter til databasen
connection.connect();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'timurserve@gmail.com',
    pass: 'kbxc wcdz joph ytps'
  }
});

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions)
    console.log('Email has been sent succesfully!');
  } catch (error) {
    console.error(error)
  }
}


// andre nødvendige kommandoer
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
const path = require("path");
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + "/client/index/index.html"))
})




app.post("/send/mail", function (req, res) {
  // skaffer user og passord fra data-en og gir dem en verdi
  let message=req.body.message
  let name = req.body.sender
  let email = req.body.email
  var mailOptions = {
    from: 'timurserve@gmail.com',
    to: ['gusarov.timur@gmail.com'],
    subject: `INCOMING MAIL FROM ${name}: ${email}`,
    text: message
  };
  res.send(sendMail(transporter, mailOptions))
})

// // post "/create/user/"
// app.post("/create/user/", function (req, res) {
//     // skaffer user og passord fra data-en og gir dem en verdi
//     let user = req.body.user
//     let passord = req.body.passord
//     let hiddenPass = md5(passord)
//     // legger til brukeren i users "table"
//     connection.query(`INSERT INTO clients (username, password) VALUES ("${user}", "${hiddenPass}")`)


//     connection.query(`CREATE TABLE ${user}Connections (initiator VARCHAR(100), accepter VARCHAR(100), initiatorID INT, accepterID INT)`)



// })


// app.post("/change/user/", function (req, res) {
//     // skaffer user og passord fra data-en og gir dem en verdi
//     let oldUser = req.body.oldUser
//     let newUser = req.body.newUsername
//     let password = req.body.pass
//     let hiddenPass = md5(password)
//     // legger til brukeren i users "table"
//     connection.query(`UPDATE clients set username = "${newUser}" WHERE username = "${oldUser}" AND password = "${hiddenPass}"`)
//     connection.query(`ALTER TABLE ${oldUser}connections RENAME TO ${newUser}connections`)
// })

app.use(express.static("client"))