let singers = ["Avicii", "DavidGueta", "Hillsong", "Justin", "Marshmello"]

console.log(singers[1])

singers.unshift("AnaVitoria");
console.log(singers)

let places = ["Rio de janeiro", "São Paulo", "Bahia", "Rio Grande do Sul", "Minas"]

places.pop()
console.log(places)

let color = ["red" , "blue" , "white" , "black" , "green" , "yellow"]

color.splice(1,4)
console.log(color)

let names = ["Andre" , "Leo" , "Livia" , "Paulo" , "Carla"]

names.splice(4,0, "Theo","Laura")
console.log(names)

let number = [26 , 27 , 28 , 29 ,30]

number.shift()
console.log(number)

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a , b){
    return(a-b)
})

console.log(numbers)
