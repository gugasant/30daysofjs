const love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveX = love.match(/love/gi)
console.log(loveX.length) // 3x word love

const because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// console.log(sentence.replace(/@/g, '').replace(/%/g, '').replace(/&/g, '').replace(/$/g, '').replace(/#/g, '').replace(/;/g, ''))
console.log(sentence.replace(/@|%|$|#|&|;/g, ''))

let info = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salary = info.match(/\d+/g)[0] * 12
let bonus = info.match(/\d+/g)[1] * 1
let courses = info.match(/\d+/g)[2] * 12
console.log(salary + bonus + courses)