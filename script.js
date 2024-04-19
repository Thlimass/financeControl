const tbody = document.querySelector("tbody");
const amount = document.querySelector("#amount");
const btnRestart = document.querySelector("#btnRestart");

    // Perguntar o nome do usuário novamente
    let userName = prompt("Olá! Qual é o seu nome?");
    // Verificar se o usuário inseriu um nome
    if (userName) {
        alert(`Olá, ${userName}! Bem-vindo ao Gerenciador de Despesas.`);
    } else {
        alert("Olá! Bem-vindo ao Gerenciador de Despesas.");
    }

 // Array para armazenar os valores das items
 let items = [];

 // Loop para solicitar o valor de cada dia da semana
 for (let i = 0; i < 7; i++) {
     let valor;
     do {
         valor = parseFloat(prompt(`Digite o valor da despesa para o Dia ${i + 1}:`));
         if (isNaN(valor)) {
             alert("Por favor, insira um valor válido.");
         }
     } while (isNaN(valor));
     items.push(valor);
     // Exibir mensagem ao final do último valor inserido
    if (i === 6) {
        alert(`Obrigado, ${userName}! Suas despesas ao longo da semana serão exibidas.`);
    }
 }

 // Função para atualizar a tabela com as items
 function updateTable() {
     let bdTable = document.getElementById("bdTable");
     // Limpar o conteúdo anterior da tabela
     bdTable.innerHTML = "";
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
     document.getElementById("somaTotal").style.display = "block";
     document.getElementById("dailyAverage").style.display = "block";
 }

 // Função para editar o valor de uma despesa
 function editExpenses(index) {
     let newValue;
     do {
         newValue = parseFloat(prompt(`Digite o novo valor da despesa para o Dia ${index + 1}:`));
         if (isNaN(newValue)) {
             alert("Por favor, insira um valor válido.");
         }
     } while (isNaN(newValue));
     items[index] = newValue;
     // Atualizar a tabela com o novo valor editado
     updateTable();
 }

 // Função para reiniciar o programa
 function restart() {

        // Perguntar o nome do usuário novamente
        let userName = prompt("Olá! Qual é o seu nome?");
        // Verificar se o usuário inseriu um nome
        if (userName) {
            alert(`Olá, ${userName}! Bem-vindo ao Gerenciador de Despesas.`);
        } else {
            alert("Olá! Bem-vindo ao Gerenciador de Despesas.");
        }

     // Limpar o array de items
     items = [];
     // Reiniciar o loop para solicitar os valores da semana
     for (let i = 0; i < 7; i++) {
         let valor;
         do {
             valor = parseFloat(prompt(`Digite o valor da despesa para o Dia ${i + 1}:`));
             if (isNaN(valor)) {
                 alert("Por favor, insira um valor válido.");
             }
         } while (isNaN(valor));
         items.push(valor);
     }
     // Atualizar a tabela
     updateTable();
 }

 // Chamar a função para inicializar a tabela
 updateTable();