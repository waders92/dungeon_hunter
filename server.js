const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/app.js');
const bodyParser = require('body-parser');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
})