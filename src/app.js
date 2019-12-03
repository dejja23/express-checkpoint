const path = require('path');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const date = new Date();
  date.getHours() >= 8 && date.getHours() < 17
    ? next()
    : res.send('<h1>Our office is not open now</h1>');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

app.get('/ourservices', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/ourservices.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

app.listen(3000, () => {
  console.log('server runnig on port 3000');
});
