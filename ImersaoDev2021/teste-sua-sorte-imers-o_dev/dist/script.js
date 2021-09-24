function Chutar() {
  var numResult = document.getElementById("resultado");
  var numSecret = Math.round(Math.random() * 11);
  var numTry = parseInt(document.getElementById("valor").value);
  console.log(numTry);
  if (numTry == numSecret) {
    numResult.innerHTML =
      "Acertoooou!!!! o numero da sorte realmente era " +
      numSecret +
      "!! partiu Las Vegas ;)";
  } else if (numTry > 10 || numTry < 0) {
    numResult.innerHTML = "Digite um numero valido!!! (de 0 a 10)";
  } else {
    numResult.innerHTML =
      "Erroooooou, olha essa fera bixo, o numero da sorte  era o " +
      numSecret +
      "... mas que azarado!";
  }
}