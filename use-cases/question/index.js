var makeAddQuestion = require("./add-question")
var makeListQuestions = require("./list-questions")
var makeGetQuestion = require("./get-question")
var makeRandomQuestions = require("./random-number-questions")
var questionsDb = require("../../data-access")

//var makeRandomNumberQuestion = require("random-number-question") //TODO:
//var makeEditQuestion = require("edit-question") //TODO:

// After these are implented add to questionService

const addQuestion = makeAddQuestion({ questionsDb })
const listQuestions = makeListQuestions({ questionsDb })
const oneQuestion = makeGetQuestion({ questionsDb })
const randomQuestions = makeRandomQuestions({ questionsDb })

const questionService = {
    addQuestion,
    listQuestions,
    oneQuestion,
    randomQuestions
}

module.exports = questionService
module.exports = { addQuestion, listQuestions, oneQuestion, randomQuestions }