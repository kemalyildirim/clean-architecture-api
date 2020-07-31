module.exports = function makeGetQuestions({ listQuestions }) {
    return async function getQuestions (httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const questions = await listQuestions()
            return {
                headers,
                statusCode: 200,
                body: questions
            }
        } catch (e) {
            console.log(e)
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message
                }
            }
        }
    }
}