const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require("body-parser")
const generateRubbish = require('./generate_rubbish')
const port = 3000
const app = express()


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post("/", (req, res) => {
  const rubbish = generateRubbish(req.body)
  const option = new Object();
  option[req.body.opt] = req.body.opt
  res.render("index", { rubbish: rubbish, option: option});
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})