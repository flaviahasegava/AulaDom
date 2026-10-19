// Arrow function (Função reduzida)
const multiplicarValor=(num1, num2)=>{
    return num1 * num2;
}

console.log(multiplicarValor(3,5))

// =======================================================================

// Arrays (Lista de dados)
let herois = ["Arqueiro", "Thor", "Viúva"];
console.log(herois[0]) // [0] Mostra apenas um (nessa lista vai do 0 ao 3)

// =======================================================================

// Push - Método adicionar um item no final
herois.push("Capitão") 
console.log(herois)

// =======================================================================

// Pop - Remove o último item adicionado
herois.pop("Capitão")
console.log(herois)

// =======================================================================

// DOM - Document Object Model (Manipula) - Usa o ID para manipular
document.getElementById("titulo").innerText="Dev" // document (DOM) e getElementById recebe o id // sem o innerText ou vazio, ele pega apenas o que está no h1

// Função mudar
function mudar(){
    let novo = document.getElementById("nome");
    let titulo = document.getElementById("titulo");
    // inner - Passa texto e elemento - Altera o título
    titulo.innerHTML = novo.value;
}

function inserir(){
    let numero = document.getElementById("posicao").value -1; // "valor -1" coloca na posiçao "1", pois conta como "0" o primeiro colocado
    let novoTime = document.getElementById("novo").value;
    // getElementsByClassName recebe as classes
    document.getElementsByClassName("time")[numero].innerHTML = novoTime;
}

// querySelector - escolhe qual quer selecionar (apenas um) / ex: pega uma class específica
let botao = document.querySelector("#btnImagem");
let container = document.querySelector("#containerImagem");

// Adicionar o evento de click
// addEventListener - Faz qualquer ação
botao.addEventListener("click",function(){

    if(document.getElementById("minhaImagem")){
        alert("Imagem já foi criada")
        return
    }

    // createElement - Cria um novo elemento imagem
    let novaImg = document.createElement("img");

    novaImg.id = "minhaImagem"
    novaImg.src = "/src/assets/imagem.jpg";
    novaImg.alt = "Imagem de um cachorro em pé segurando um buque bem fofo";

    // Estilização
    novaImg.style.width="400px";
    novaImg.style.borderRadius="10px";
    novaImg.style.marginTop="15px";
    novaImg.style.display="block";

    container.appendChild(novaImg)
})