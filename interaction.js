
let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

function create_item(url_img, nome, preco, descricao){
    return`
        <div class="item">
        <img src="${url_img}" />
        <h1>${nome}</h1>
        <p id="preco"> <span>Preço:</span>  R$ ${preco}</p>
        <br />
        <p id="descript">
        <span>Descrição:</span> <br />
        ${descricao}
        </p>
        </div>
    `
}
        
document.querySelector("#itens_section").innerHTML =
    create_item(ITENS_LOJA[0].url_img, ITENS_LOJA[0].nome, ITENS_LOJA[0].preco, ITENS_LOJA[0].descricao)+
    create_item(ITENS_LOJA[1].url_img, ITENS_LOJA[1].nome, ITENS_LOJA[1].preco, ITENS_LOJA[1].descricao)+
    create_item(ITENS_LOJA[2].url_img, ITENS_LOJA[2].nome, ITENS_LOJA[2].preco, ITENS_LOJA[2].descricao)+
    create_item(ITENS_LOJA[3].url_img, ITENS_LOJA[3].nome, ITENS_LOJA[3].preco, ITENS_LOJA[3].descricao)+
    create_item(ITENS_LOJA[4].url_img, ITENS_LOJA[4].nome, ITENS_LOJA[4].preco, ITENS_LOJA[4].descricao)+
    create_item(ITENS_LOJA[5].url_img, ITENS_LOJA[5].nome, ITENS_LOJA[5].preco, ITENS_LOJA[5].descricao)+
    create_item(ITENS_LOJA[6].url_img, ITENS_LOJA[6].nome, ITENS_LOJA[6].preco, ITENS_LOJA[6].descricao)+
    create_item(ITENS_LOJA[7].url_img, ITENS_LOJA[7].nome, ITENS_LOJA[7].preco, ITENS_LOJA[7].descricao);

