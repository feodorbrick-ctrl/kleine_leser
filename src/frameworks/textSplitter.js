import {en} from "../components/data/langText";

export const typesOfTheLessons = {
    makingTheWords: 'make-word-lesson',
    makingTheSentences: 'make-sentences-lesson',
}

class textSplitter {
    constructor(inputValue, language) {
        this.language = language === 'en' ? en : language === 'rus' ? en : en
        this.value = Array.from(inputValue);
        this.syllables = []
        this.word = []
        this.sentence = []
        this.res = []
        this.arrToSplit = []
    }

    switchPrepare(type = '', value) {
        this.syllables = []
        this.word = []
        this.res = []
        this.sentence = []
        if (value) {
            switch (type) {
                case typesOfTheLessons.makingTheWords:
                    this.#syllableSplitter(value);
                    break;
                case typesOfTheLessons.makingTheSentences:
                    this.#sentenceSplitter(value);
                    break;
            }
        } else {
            return ''
        }
        this.arrToSplit = []
        return this.res;
    }

    #syllableSplitter(word) {
        this.arrToSplit = Array.from(word);

        let syllable = []
        for (let i = 0; i < this.arrToSplit.length; i++) {
            if (this.arrToSplit[i] !== '') {
                syllable.push(this.arrToSplit[i])
            }
            if (this.language.vowels.includes(this.arrToSplit[i])) {
                this.syllables.push(syllable.join(''))
                syllable = []
            }
        }
        if (syllable !== []) this.syllables.push(syllable.join(''))
        this.res = this.syllables
    }

    #sentenceSplitter(sentence) {
        this.arrToSplit = Array.from(sentence);
        for (let i = 0; i < this.arrToSplit.length; i++) {
            if (this.arrToSplit[i] === ' ') {
                if (this.word.length !== 0) this.sentence.push(this.word.join(''))
                this.word = []
            }
            if (this.arrToSplit[i] !== '' && this.arrToSplit[i] !== ' ') {
                this.word.push(this.arrToSplit[i])
            }
        }
        if (this.word !== []) this.sentence.push(this.word.join(''))
        this.res = this.sentence
    }
}

export default textSplitter;