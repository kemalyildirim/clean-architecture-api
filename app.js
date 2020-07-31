var { getQuestions, getQuestion, listRandomQuestions } = require('./controllers')
var makeCallback = require("./express-callback")
var express = require('express');
var app = express();

//const FILE = "data/questions.json"
const apiRoot = process.env.DM_API_ROOT

app.get('/question/', makeCallback(getQuestions))
app.get('/question/:id', makeCallback(getQuestion))
app.get('/question/random/:count', makeCallback(listRandomQuestions))
//app.patch(`${apiRoot}/question/:id`, makeCallback(patchQuestion))

/*
app.get(`${apiRoot}/question/:id`, makeCallback(getQuestionById))
app.delete(`${apiRoot}/question/:id`, makeCallback(deleteQuestion))
app.patch(`${apiRoot}/user`, makeCallback(patchUser))
app.get(`${apiRoot}/user`, makeCallback(getUsers))
app.use(makeCallback(notFound))
*/

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%d", host, port)
})
