var { addQuestion, randomQuestions, editQuestion, listQuestions, oneQuestion } = require("../use-cases/question")
var { notFound } = require("./not-found")
var makeGetQuestions = require("./get-questions")
var makeGetQuestion = require("./get-question")
var makeRandomQuestions = require("./random-questions")
/**
 * //TODO:
 * login use cases
 */

const getQuestions = makeGetQuestions({ listQuestions })
const getQuestion = makeGetQuestion({ oneQuestion })
const listRandomQuestions = makeRandomQuestions({ randomQuestions })

const questionController = {
    getQuestions,
    getQuestion,
    listRandomQuestions,
    notFound
}

module.exports = questionController
module.exports = { getQuestions, getQuestion, listRandomQuestions, notFound }