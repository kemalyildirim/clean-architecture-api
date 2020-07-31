module.exports = function buildMakeQuestion () {
    return function makeQuestion ({
        image_path,
        turkish_english,
        english_turkish
    } = {}) {
        // Validation
        if (!image_path) throw new Error('Image path cannot be null.')
        if (!turkish_english) throw new Error('Turkish-English dictionary cannot be null.')
        if (!english_turkish) throw new Error('English-Turkish dictionary cannot be null.')
        
        return {
            getImagePath: () => image_path,
            getTurkishEnglish: () => turkish_english,
            getEnglishTurkish: () => english_turkish
        }
    }
}
