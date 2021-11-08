function start() {
    const calcula = document.getElementById('calculo')
    calcula.onclick = calculaIMC 
}

let calculaIMC = event => {
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    if(altura >= 100 && peso >= 40) {
        altura = altura / 100 //Conversão da altura de centímetros para metros
        let result = peso / (altura * altura)
        if (result <= 18.5) {
            alert('O IMC calculado é igual a ' + result.toFixed(1) + '. Segundo a Organização Mundial da Saúde (OMS), indica magreza.')
        } else if(result <= 24.9) {
            alert('O IMC calculado é igual a ' + result.toFixed(1) + '. Segundo a Organização Mundial da Saúde (OMS), indica situação estável.')
        } else if(result <= 29.9) {
            alert('O IMC calculado é igual a ' + result.toFixed(1) + '. Segundo a Organização Mundial da Saúde (OMS), indica sobrepeso.')
        } else if(result <= 39.9) {
            alert('O IMC calculado é igual a ' + result.toFixed(1) + '. Segundo a Organização Mundial da Saúde (OMS), indica obesidade.')
        } else {
            alert('O IMC calculado é igual a ' + result.toFixed(1) + '. Segundo a Organização Mundial da Saúde (OMS), indica obesidade grave.')
        }
    } else {
        alert("Valores de peso e/ou altura inválidos")
    }
    //Limpa os campos de altura e peso da página
    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}

start()