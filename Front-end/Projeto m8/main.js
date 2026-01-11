const form = document.getElementById('Contatosform');
const listaContatos = document.getElementById('listaContatos'); 

let linhas = '';
let nomes = [];
let contatos = [];
let apelidos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
});

function adicionarLinha() {  
    const inputNome = document.getElementById(`nome`);
    const inputTelefone = document.getElementById(`telefone`);
    const inputApelido = document.getElementById(`apelido`);

    if (contatos.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value} já foi regstrado anteriormente`);
    } else {

    nomes.push(inputNome.value);
    apelidos.push(inputApelido.value);
    contatos.push(inputTelefone.value);

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputApelido.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    }

    inputNome.value = ``;
    inputTelefone.value = ``; 
    inputApelido.value = ``;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector(`tbody`);
    corpoTabela.innerHTML = linhas;
}

