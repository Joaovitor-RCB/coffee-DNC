const corpo = document.querySelector("body");

criaModal = () => {
  var modalTotal = document.createElement("div");
  modalTotal.id = "modalTotal";

  var modalSobrenos = document.createElement("div");
  modalSobrenos.id = "modalSobrenos";
  modalTotal.appendChild(modalSobrenos);

  var exit = document.createElement("div");
  exit.id = "exit";
  modalSobrenos.appendChild(exit);

  var buttonExit = document.createElement("button");
  var textoButton = document.createTextNode("X");
  buttonExit.appendChild(textoButton);
  exit.appendChild(buttonExit);

  var info = document.createElement("div");
  info.id = "info";
  modalSobrenos.appendChild(info);

  var h1 = document.createElement("h1");
  var textoH1 = document.createTextNode("Atendimento");
  h1.appendChild(textoH1);
  info.appendChild(h1);

  var paragrafo = document.createElement("p");
  info.appendChild(paragrafo);

  var textoP = document.createTextNode("Rua José de Alencar, 111, Centro ");
  paragrafo.appendChild(textoP);

  var quebra = document.createElement("br");
  paragrafo.appendChild(quebra);

  var textoP2 = document.createTextNode("CEP: 12209-000 | +55 (11) 3333-8000");
  paragrafo.appendChild(textoP2);

  var buttonContato = document.createElement("button");
  var textoButtonContato = document.createTextNode("ENTRAR EM CONTATO");
  buttonContato.appendChild(textoButtonContato);
  info.appendChild(buttonContato);

  corpo.appendChild(modalTotal);

  fecharModal = () => {
    var modalTotal = document.getElementById("modalTotal");
    modalTotal.remove();
  };
  buttonExit.addEventListener("click", fecharModal);
};
