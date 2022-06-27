// ------------------------------- Atividade 6 ----------------------------------- //

// let singers = ["Avicii", "DavidGueta", "Hillsong", "Justin", "Marshmello"]

// console.log(singers[1])

// singers.unshift("AnaVitoria");
// console.log(singers)

// let places = ["Rio de janeiro", "São Paulo", "Bahia", "Rio Grande do Sul", "Minas"]

// places.pop()
// console.log(places)

// let color = ["red" , "blue" , "white" , "black" , "green" , "yellow"]

// color.splice(1,4)
// console.log(color)

// let names = ["Andre" , "Leo" , "Livia" , "Paulo" , "Carla"]

// names.splice(4,0, "Theo","Laura")
// console.log(names)

// let number = [26 , 27 , 28 , 29 ,30]

// number.shift()
// console.log(number)

// let numbers = [7,5,6,3,8,9,2,1,4]

// numbers.sort(function(a , b){
//     return(a-b)
// })

// console.log(numbers)

// ------------------------ Atividade 6 ------------------------------------ //

let me = 
{
    Nome: "Leonardo",
    idade: 26,
    cidade: "Rio de janeiro"
}


me.musica = "This is my life"
console.log(me)

let animes = {
    Anime: "boku no hero",
    Anime2: "Jujutsu Kaisen",
    Anime3: "One piece"
}

delete animes.Anime
console.log(animes)

console.log(animes)

let cadastro = [
    {
        nome:"Livia",
        idade: 26,
        telefone:21993067698,
        amigos: ["Isabel","Ricardo", "Paula", "Manuela"] 
    },
    {
        nome:"Leonardo",
        idade: 26,
        telefone:21993067698,
        amigos: ["Cleto","Ricardo", "Yuri", "Manuella"] 
    },
    {
        nome:"Rita",
        idade: 26,
        telefone:21993067698,
        amigos: ["David","Paulo", "Paula", "Joana"] 
    },
    {
        nome:"Juliana",
        idade: 23,
        telefone:21923067698,
        amigos: ["João","Manuela", "Roberta", "Myllena"] 
    },
    {
        nome:"Felipe",
        idade: 31,
        telefone:21944067698,
        amigos: ["Isabel","Ricardo", "Paula", "Manu"] 
    }
];


for(let contador = 0; contador <= cadastro.length; contador++)
{
    console.log(cadastro[contador].amigos[contador])
}