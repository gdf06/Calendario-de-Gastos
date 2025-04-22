// filepath: c:\Users\Unicesumar.DESKTOP-EI8GDSH\Desktop\Calandario de gastos\Calculadora-de-gastos-mensais-1\script.js
document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionar = document.getElementById('adicionar-gasto');
    const listaGastos = document.getElementById('lista-gastos');
    const totalGastos = document.getElementById('total-gastos');

    let total = parseFloat(totalGastos.textContent.replace(',', '.')) || 0;

    botaoAdicionar.addEventListener('click', () => {
        const descricao = document.getElementById('descricao').value.trim();
        const valor = parseFloat(document.getElementById('valor').value);

        if (descricao && !isNaN(valor)) {
            // Adiciona o gasto à lista
            const li = document.createElement('li');
            li.textContent = `${descricao}: R$ ${valor.toFixed(2).replace('.', ',')}`;
            listaGastos.appendChild(li);

            // Atualiza o total de gastos
            total += valor;
            totalGastos.textContent = total.toFixed(2).replace('.', ',');

            // Limpa os campos
            document.getElementById('descricao').value = '';
            document.getElementById('valor').value = '';
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
        {
            
            
        }
    });
});
