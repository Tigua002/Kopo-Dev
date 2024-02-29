// // laster inn all node.js modulene
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config()
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on this port: ${PORT}`));


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


const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online`)
})

client.login(process.env.TOKEN)


app.post("/send/mail", function (req, res) {
  // skaffer user og passord fra data-en og gir dem en verdi
  let message = req.body.message
  let name = req.body.sender
  let email = req.body.email
  var mailOptions = {
    from: 'timurserve@gmail.com',
    to: ['gusarov.timur@gmail.com'],
    subject: `INCOMING MAIL FROM ${name}: ${email}`,
    text: message
  };


  client.channels.fetch('1211988415881543710')
    .then(channel => channel.send(message))
  console.log("Discord succecfully notified")

  res.send(sendMail(transporter, mailOptions))
})


app.use(express.static("client"))
