let numbers = [1, 2, 3, 4, 5];
let names = ['Gift','Mary','Joshua','Favour','Anita','Grant','Kachi'];
console.log(numbers[2])
console.log(names[4])
let lastPosition= names.length-1
console.log(names[lastPosition])
names[2] = "Betsy"
names[8] = "Chinwendu Gift"
console.log(names)
let count = names.push('Jessica')
console.log(count)
names.push('Gerald','Munachi','Ngozi')
console.log(names)
//let removeElement = 
names.pop()
names.pop()
names.pop()
// console.log('I was removed: ', removeElement)
console.log(names)
names.shift()
console.log(names)
names.unshift('Divine','Ezra')
console.log(names)
let days= ['Monday','Tuesday','Thursday']
days.splice(2,0,'Wednesday')
console.log(days)
days.splice(3,1,'Friday')
console.log(days)