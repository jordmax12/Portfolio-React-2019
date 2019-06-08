const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const { wrapper } = require('./views/wrapper');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/views/assets/js'));
app.use(express.static(__dirname + '/views/assets/css'));
app.use(express.static(__dirname + '/views/assets/img/Little Jordan'));

app.get('*', (req, res) => {
    res.send(wrapper);
})

app.listen(port, () => console.log(`listening on port ${port}`));
