module.exports = function makeListQuestions({ questionsDb }) {
    return async function listQuestions() {
        var questions = await questionsDb.findAll()
        return questions
    }
}