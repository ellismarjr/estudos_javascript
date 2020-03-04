function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade) {
    let validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }

    return validar;
}

// alert(soma(5, 10))
// alert(setReplace("Vai Japão", "Japão", "Brasil"))
var idade = prompt("Qual sua idade");
console.log(validaIdade(idade))