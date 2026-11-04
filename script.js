function calcular(operacao) {
    let valor1 = Number(document.getElementById('n1').value);
    let valor2 = Number(document.getElementById('n2').value);
    let resultado;


    if (document.getElementById('n1').value.trim() === '' || document.getElementById('n2').value.trim() === '') {

        document.getElementById('resultado').innerText = 'Preencha todos os campos!';

        return
    }

    if (
        isNaN(valor1) || isNaN(valor2)) {
        document.getElementById('resultado').innerText = "Digite um número Valido!";
        return

    }

    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':

            if (valor2 === 0) {
                document.getElementById('resultado').innerText = 'Não é possível dividir por zero!';
            } else {
                resultado = valor1 / valor2;
                break;
            }
        case '%':
            resultado = (valor1 * valor2) / 100;
            break;
        default:
            resultado = "Operação inválida";
    }


}







