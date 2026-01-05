let CampoA = document.getElementById("CampoA");
let CampoB = document.getElementById("CampoB");
let campos = document.getElementById("campos");



function verificarCampos() {

    let ValorA = parseInt(CampoA.value);
    let ValorB = parseInt(CampoB.value);
    return  ValorB > ValorA;
    }



campos.addEventListener("submit", function(e) {
    let campoValido = verificarCampos();
    e.preventDefault();

    const mensagemDeSucesso = "O Campo B é maior que o campo A, esta tudo certo!"


    if (campoValido) {
        alert (mensagemDeSucesso)
    } else {
        alert("O campo B precisa se maior que o campo A")
    }
})




CampoA.addEventListener("input", verificarCampos);
CampoB.addEventListener("input", verificarCampos);