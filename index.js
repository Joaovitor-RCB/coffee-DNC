//funçoes//
setTimeout(criaBtn = (Selector) => {
    var produto = document.querySelector(Selector);
    var buttonComprar = document.createElement("button");
    const texto = document.createTextNode("COMPRAR AGORA");
    buttonComprar.classList.add("btnC");
    buttonComprar.appendChild(texto);
    produto.appendChild(buttonComprar);
}, 2000);

removeBtn = (Selector) => {
    var produto = document.querySelector(Selector);
    var btn = produto.querySelector(".btnC");
    if (btn) {
        btn.remove();
    }};