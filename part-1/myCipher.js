

let phrase = "I LOVE CRYPTOGRAPHY"

function rot13(str) {
      const rot13 = {
        'P': "A",
        'N': 'B',
        'O': 'C',
        'S': 'D',
        'R': 'E',
        'Q': 'F',
        'T': 'G',
        'W': 'H',
        'V': 'I',
        'U': 'J',
        'X': 'K',
        'Y': 'L',
        'Z': 'M',
        'A': 'N',
        'B': 'O',
        'C': 'P',
        'D': 'Q',
        'E': 'R',
        'G': 'S',
        'H': 'T',
        'F': 'U',
        'L': 'V',
        'J': 'W',
        'K': 'X',
        'I': 'Y',
        'M': 'Z'
      }
      const splitStr = str.split(' ').map(string => {
        return string.split('').map(string => rot13[string] === undefined ? string : rot13[string]).join('');
      }).join(' ');
        return splitStr;
      }

      console.log(rot13(phrase));

      //I picked this one because you need a key to break it or keep trying ALOT of times to break it. 