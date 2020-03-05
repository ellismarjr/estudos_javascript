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

function botao() {
    // document.querySelector("h3").innerHTML = "Obrigado por clicar!"
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar </b>"
    // alert("Obrigado por clicar!")
}

function redirecionar() {
    // window.open("https://www.basis.com.br/")
    window.location.href = "https://www.basis.com.br/"
}

function mouseover(element) {
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    element.innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto")
}

function trocar(element) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    element.innerHTML = "Passe o mouse aqui";
}

function load() {
    // alert("pagina carregada")
}

function funcaoChange(element) {
    console.log(element.value)
}

// alert(soma(5, 10))
// alert(setReplace("Vai Japão", "Japão", "Brasil"))
// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade))