class StringConvertions{

    removeSpecialSymbols(text) {
        return text.replace(/(\r\n\t|\n|\r|\t)/gm, "").trim();
    }
}

module.exports = new StringConvertions();