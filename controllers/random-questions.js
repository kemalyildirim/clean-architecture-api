module.exports = function makeListRandomQuestions({ randomQuestions }) {
    return async function listRandomQuestions(httpRequest) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            count = parseInt(httpRequest.params.count)
            //console.log(count)
            const question = await randomQuestions({ random_count: count })
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