var express = require('express');
var router = express.Router();
const bookRouter = require("./book.js");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Welcome to the API');
});
// book router 
router.use("/books", bookRouter);

module.exports = router;
