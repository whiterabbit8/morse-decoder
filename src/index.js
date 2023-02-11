const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = [];
    let decodeArr = [];
    let decodeMessage = '';
    message = expr.match(/.{1,10}/g);
    message.forEach(item => {
        let decodeStr = '';
        for (let i = 0; i < item.length; i += 2) {
            if (item[i] + item[i + 1] === '11') {
                decodeStr += '-';
            } else if (item[i] + item[i + 1] === '10') {
                decodeStr += '.';
            } else if (item[i] === '*') {
                decodeStr += ' ';
                break
            }
        }
        decodeArr.push(decodeStr);
    })
    decodeArr.forEach(letter => {
        if (letter === ' ') decodeMessage += letter;
        for (let key in MORSE_TABLE) {
            if (letter === key) {
                decodeMessage += MORSE_TABLE[key];
            }
        }
    })
    return decodeMessage;
}

module.exports = {
    decode
}