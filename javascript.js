function ConverterReal() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolar = parseFloat(valor)
  var valorEmReal = valorEmDolar * 5.25
  var elementoValorConvertidoReal = document.getElementById(
    'valorConvertidoReal'
  )
  var valorConvertidoReal = 'O resultado em real é R$ ' + valorEmReal
  elementoValorConvertidoReal.innerHTML = valorConvertidoReal
}
function ConverterEuro() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolar = parseFloat(valor)
  var valorEmEuro = valorEmDolar * 0.85
  var elementoValorConvertidoEuro = document.getElementById(
    'valorConvertidoEuro'
  )
  var valorConvertidoEuro = 'O resultado em euro é ' + valorEmEuro + ' €'
  elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro
}
function ConverterBitcoin() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolar = parseFloat(valor)
  var valorEmBitcoin = (valorEmDolar * 0.000021).toFixed(7)
  var elementoValorConvertidoBitcoin = document.getElementById(
    'valorConvertidoBitcoin'
  )
  var valorConvertidoBitcoin = 'O resultado em bitcoin é ' + valorEmBitcoin
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin
}
