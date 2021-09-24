function Converter() {
  var elementoId = document.getElementById("valor");
  var valor = elementoId.value;
  var valorDolar = parseFloat(valor);
  // Valor do Dolar Atualizado em 14/09
  var valorReal = valorDolar * 5.23;

  var elementoDoValor = document.getElementById("valorConvertido");

  var valorConvertido = "O resultado em real é R$: " + valorReal;

  elementoDoValor.innerHTML = valorConvertido;
}