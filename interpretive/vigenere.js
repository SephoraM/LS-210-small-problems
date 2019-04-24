const vigenereEncrypt = (string, keyword) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let index = 0;
  return string
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      const number = letters.indexOf(keyword[index].toUpperCase());

      if (charCode >= 97 && charCode <= 122) {
        char = String.fromCharCode(
          charCode + number > 122 ? charCode - 26 + number : charCode + number,
        );
        index = index === keyword.length - 1 ? 0 : index + 1;
      }
      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(
          charCode + number > 90 ? charCode - 26 + number : charCode + number,
        );
        index = index === keyword.length - 1 ? 0 : index + 1;
      }
      return char;
    })
    .join('');
};

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// result: Bmnxmtpeqw dhz'x gh ar pbldal!
