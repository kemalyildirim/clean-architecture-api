module.exports = function makeGetQuestion({ questionsDb }) {
    return async function oneQuestion({ questionId }) {
        if (questionId === NaN || typeof questionId !== 'number' ) {
            throw new Error('You must present a question id.')
        }

        var question = await questionsDb.findById(questionId)
        return question
    }
}   