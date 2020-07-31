module.exports = function makeRandomQuestions({ questionsDb }) {
    return async function randomQuestions({ random_count }) {
        if (random_count < 0) {
            throw new Error("Present a valid number.")
        }
        var questions = await questionsDb.dbRandomQuestions(random_count)
        return questions
    }
}