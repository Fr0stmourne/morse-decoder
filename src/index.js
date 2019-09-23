const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    const BINARY_TO_MORSE = {
        '00': '',
        '10': '.',
        '11': '-'
    }
    const LETTER_LENGTH = 10;
    const SPACE = '**********';
    const encodedWordsArr = expr.split(SPACE);
    return encodedWordsArr.map(encodedWord => {
        let decodedWord = '';
        for (let i = 0; i < encodedWord.length; i += 10) {
            const encodedLetter = encodedWord.substr(i, 10);
            let morseLetter = '';
            for (let j = 0; j < LETTER_LENGTH; j += 2) {
                morseLetter += BINARY_TO_MORSE[encodedLetter.substr(j, 2)];
            }
            decodedWord += MORSE_TABLE[morseLetter];
        }
        return decodedWord;
    }).join(' ');
}

module.exports = {
    decode
}