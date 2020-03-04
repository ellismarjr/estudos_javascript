//  Arrays
var lista = ["maça", 'pera', 'laranja'];
lista.push("uva")
lista.pop() // retira o ultimo elemento do array
console.log(lista) // imprime a lista
console.log(lista.length) // imprime o tamanho do array
console.log(lista.reverse()); // reverte a order do array
console.log(lista.toString()) // imprime os elementos em forma de strings
console.log(lista.join(" - ")) // tranforme em string e separa do jeito que voce passa o parametro

// Dicionário
var fruta = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(fruta[1].cor)