export default function buildMakeUser () {
    return ({
        username,
        name,
        surname,
        highest_score = 0, //Initial score.
        created_on = Date.now()
    } = {}) => {

        // Validation
        if (!username) throw new Error('Username cannot be null.')
        if (!name) throw new Error('Name cannot be null.')
        if (!surname) throw new Error('Surname cannot be null.')
        
        return {
            getUsername: () => username,
            getName: () => name,
            getSurname: () => surname,
            getHighestScore: () => highest_score,
            getCreatedOn: () => created_on
        }
    }
}

