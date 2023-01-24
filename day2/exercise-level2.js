console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

let num = '10'
console.log(typeof num == 10) // false
let numInt = parseInt(num)
console.log(typeof numInt) // number

let num2 = '9.8'
let numFloat = parseFloat(num2)
console.log(Math.round(numFloat)) // 10

let wordPython = 'python'
let wordJargon = 'jargon'
console.log(wordPython.includes('on'), wordJargon.includes('on')) // true true

let jargon = 'I hope this course is not full of jargon.'
console.log(jargon.includes('jargon'))

const randNum = Math.floor(Math.random() * 101)
console.log(randNum)

const randNum2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50 // Math.floor(Math.random() * 51) + 50
console.log(randNum2)

const randNum3 = Math.floor(Math.random() * 256)
console.log(randNum3)

let wordJs = 'JavaScript'
console.log(wordJs.charAt(Math.floor(Math.random() * wordJs.length)))

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.substring(31, 54))