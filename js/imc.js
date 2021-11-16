const start = () => {
    const calcular = document.getElementById('calcular')
    calcular.onclick = calculaIMC
}

function calculaIMC () {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {
        altura = altura / 100
        let valorIMC = peso / (altura * altura)
        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if (valorIMC < 25) {
            classificacao = 'peso ideal';
        }else if (valorIMC < 30){
            classificacao = 'acima do peso';
        }else if (valorIMC < 35){
            classificacao = 'obesidade grau I';
        }else if (valorIMC < 40){
            classificacao = 'obesidade grau II';
        }else {
            classificacao = 'obesidade grau III';
        }

        resultado.textContent = "O IMC é " + valorIMC.toFixed(1) + " e está como "+ classificacao;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}

start()