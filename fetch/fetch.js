// fetch é uma função que vai receber, como primeiro argumento o URL
// fetch do inglês BUSCAR
// usamos o fetch para vuscar dados vindo de uma API

fetch("https://github.com/ArthurGomes09")
.then((response)=> response.json())
.then((json)=> console.log(json))
.catch((erro)=> console.log("Error", erro));