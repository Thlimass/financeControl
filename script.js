// Função para solicitar um valor numérico positivo
function promptPositiveNumber(message) {
    let value;
    do {
        value = parseFloat(prompt(message));
        if (isNaN(value) || value < 0) {
            alert("Por favor, insira um valor numérico positivo válido.");
        }
    } while (isNaN(value) || value < 0);
    return value;
}

// Função para solicitar o nome do usuário
function askUserName() {
    let name = prompt("Olá! Qual é o seu nome?");
    if (!name) {
        name = "Usuário"; // Definir um nome padrão se o usuário não inserir nenhum nome
    }
    return name;
}

// Função para solicitar os valores das despesas para cada dia da semana
function promptExpenses() {
    let items = [];
    for (let i = 0; i < 7; i++) {
        let value = promptPositiveNumber(`Digite o valor da despesa para o Dia ${i + 1}:`);
        items.push(value);
    }
    return items;
}

// Função para atualizar a tabela com as despesas
function updateTable() {
    let tbody = document.querySelector("tbody");
    let bdTable = document.getElementById("bdTable");
    // Limpar o conteúdo anterior da tabela
    tbody.innerHTML = "";
    // Adicionar cada despesa à tabela
    items.forEach((valor, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
             <td>Dia ${index + 1}</td>
             <td>R$ ${valor.toFixed(2)}</td>
             <td class="columnAction">
               <button onclick="editExpenses(${index})"><i class='bx bx-edit-alt'></i></button>
             </td>
         `;
        tbody.appendChild(tr);
    });
    // Após atualizar a tabela, calcular e exibir a soma total e a média diária
    displayResults();
}

// Função para calcular e exibir a soma total e a média diária
function displayResults() {
    // Calcular a soma total
    let totalSum = items.reduce((total, valor) => total + valor, 0);
    // Calcular a média diária
    let dailyAverage = totalSum / 7;
    // Exibir os resultados nas divs correspondentes
    document.getElementById("totalSum").textContent = `R$ ${totalSum.toFixed(2)}`;
    document.getElementById("dailyAverage").textContent = `R$ ${dailyAverage.toFixed(2)}`;
    // Exibir as divs de resultado
    document.getElementById("totalSum").style.display = "block";
    document.getElementById("dailyAverage").style.display = "block";
}

// Função para editar o valor de uma despesa
function editExpenses(index) {
    let newValue = promptPositiveNumber(`Digite o novo valor da despesa para o Dia ${index + 1}:`);
    items[index] = newValue;
    // Atualizar a tabela com o novo valor editado
    updateTable();
}

// Função para reiniciar o programa
function restart() {
    let userName = askUserName();
    items = promptExpenses();
    alert(`Obrigado, ${userName}! Suas despesas ao longo da semana serão exibidas.`);
    updateTable();
}

// Perguntar o nome do usuário e iniciar o programa
let userName = askUserName();
let items = promptExpenses();
alert(`Obrigado, ${userName}! Suas despesas ao longo da semana serão exibidas.`);
updateTable();
