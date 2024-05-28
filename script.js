var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc  = peso / (altura * altura);
    imc = imc.toFixed(2)

    resultado = document.getElementById('resultado');
    if(imc < 18.5) {
        resultado.innerHTML = `O resultado do cálculo é: ${imc}. Cuidado, você está com peso baixo!`;

    } else if(imc > 18.5 && imc <= 24.9) {
        resultado.innerHTML = `O resultado do cálculo é: ${imc}. Parabéns, você está com peso adequado!`;

    } else if(imc >= 25 && imc <= 29.9) {
        resultado.innerHTML = `O resultado do cálculo é: ${imc}. Cuidado, você está com sobrepeso!`;

    } else if(imc > 30 && imc <= 34.9) {
        resultado.innerHTML = `O resultado do cálculo é: ${imc}. Cuidado, você está com obesidade grau 1!`;

    } else if(imc > 35 && imc <= 39.9) {
        resultado.innerHTML = `O resultado do cálculo é: ${imc}. Cuidado, você está com obesidade grau 2!`;

    } else if (imc > 40) {
        resultado.innerHTML = `O resultado do cálculo é: ${imc}. Cuidado, você está com obesidade extrema!`;
    }

    resultado.classList.remove('hidden');
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}


