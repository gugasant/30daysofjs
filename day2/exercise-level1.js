let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 7))
console.log(challenge.substring(3, 21))
console.log(challenge.includes('Script'))
console.log(challenge.split()) // toda a string vira um elemento de um array
console.log(challenge.split('')) // cada letra vira um elemento do array
console.log(challenge.split(' ')) // cada palavra separada por espaço vira um elemento do array
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15)) // S
console.log(challenge.charCodeAt(11)) // 74
console.log(challenge.indexOf('a')) // 4
console.log(challenge.lastIndexOf('a')) // 14

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf('because')) // 31
console.log(because.lastIndexOf('because')) // 47
console.log(because.search('because')) // 31

let trailingWhiteSpace = ' 30 Days Of JavaScript '
console.log(trailingWhiteSpace.trim(' '))

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/gi)) // ['a', 'a', 'a']

let days = '30 days of'
console.log(days.concat(' JavaScript'))

console.log(challenge.repeat(2))