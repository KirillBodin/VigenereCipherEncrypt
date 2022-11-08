let abc = 'abcdefghijklmnopqrstuvwxyz';

function VigenèreCipher(key) {
    const coder = (str, variants) => {
        let text = str.split(''),
            len = abc.length,
            keyChars = key.split('');
        return text.reduce( (acc, curChar) => {
            let k = keyChars[0],
                pos = abc.indexOf(curChar),
                rot = abc.indexOf(k);
            if (pos === -1) {
                return acc + curChar;
            } else {
                let newChar = abc[(len + pos + (rot * variants)) % len];
                keyChars.shift();
                keyChars.push(variants < 0 ? newChar : curChar);
                return acc + newChar;
            }
        }, '' );
    };
    this.encode = str => coder(str, 1);
    this.decode = str => coder(str, -1);
}

let string = new VigenèreCipher('kere');

console.log(string.encode('kere'))

console.log(string.decode('uiii'))