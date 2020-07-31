module.exports = function makeGetQuestion({ oneQuestion }) {
    return async function getQuestion(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            id = parseInt(httpRequest.params.id)
            const question = await oneQuestion({ questionId: id })
            return {
                headers,
                statusCode: 200,
                body: question
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