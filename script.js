function calculo() {
    const moeda = document.getElementById('moedas').value;
    const numero = parseFloat(document.getElementById('input').value);
    const resul = document.getElementById("resultadojs");

    const l = 7.38;
    const d = 5.62;
    const e = 6.22;

    let calculo;

    if (moeda === 'euro1') {
        calculo = numero * e;
    } else if (moeda === 'libras1') {
        calculo = numero * l;
    } else if (moeda === 'dolar1') {
        calculo = numero * d;
    } else {
        resul.innerHTML = 'Selecione uma opção válida';
        return;
    }

    resul.innerHTML = calculo.toFixed(2);
}