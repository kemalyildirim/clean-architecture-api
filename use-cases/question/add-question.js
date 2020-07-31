var makeQuestion = require('../../entities/question')

module.exports = function makeAddQuestion ({questionsDb}) {
    return async function addQuestion (questionInfo) {
        const question = makeQuestion(questionInfo)
        // FIXME: if question exists do something.
        return questionsDb.insert({
            image_path: question.getImagePath(),
            turkish_english: question.getTurkishEnglish(),
            english_turkish: question.getEnglishTurkish()
        })
    }
}