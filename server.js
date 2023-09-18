// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
});
// locaclhost:3000/

/* Greetings */
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name
  res.send(`Wow! Helle there, ${name}!`)
})
// locaclhost:3000/greeting

/* Tip Calculator */
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);

    if (isNaN(total) || isNaN(tipPercentage)) {
      res.status(400).send('Invalid Input');
    } else {
      const tipAmount = (total * (tipPercentage / 100)).toFixed(2);
      res.send(`${tipAmount}`);
    }
})
// // locaclhost:3000/tip/100/20

/* Magic 8 Ball */
app.get('/magic/:question', (req, res) => {
  const question = req.params.question.replace(/%20/g, ' ');
  const magicAnswer = magic8BallAnswer[Math.floor(Math.random() * magic8BallAnswer.length)];
  res.send(`<h1>The Question: ${question}</h1><h1>Magic 8 Ball Reponse: ${magicAnswer}</h1>`)
});
// Magic 8 Ball Answers
const magic8BallAnswer = [
  "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
  "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
  "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
  "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
  "Don't count on it", "My reply is no", "My sources say no",
  "Outlook not so good", "Very doubtful"
];
// locaclhost:3000/magic/Will I ever get a job

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});