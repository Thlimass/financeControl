 // Array para armazenar os valores das despesas
 let despesas = [];

 // Loop para solicitar o valor de cada dia da semana
 for (let i = 0; i < 7; i++) {
     let valor;
     do {
         valor = parseFloat(prompt(`Digite o valor da despesa para o Dia ${i + 1}:`));
         if (isNaN(valor)) {
             alert("Por favor, insira um valor válido.");
         }
     } while (isNaN(valor));
     despesas.push(valor);
 }

 // Função para atualizar a tabela com as despesas
 function atualizarTabela() {
     let corpoTabela = document.getElementById("corpoTabela");
     // Limpar o conteúdo anterior da tabela
     corpoTabela.innerHTML = "";
     // Adicionar cada despesa à tabela
     despesas.forEach((valor, index) => {
         let linha = document.createElement("tr");
         linha.innerHTML = `
             <td>Dia ${index + 1}</td>
             <td>R$ ${valor.toFixed(2)}</td>
             <td class="columnAction">
               <button onclick="editarDespesa(${index})"><i class='bx bx-edit-alt'></i></button>
             </td>
         `;
         tbody.appendChild(tr);
     });
     // Após atualizar a tabela, calcular e exibir a soma total e a média diária
     exibirResultados();
 }

 // Função para calcular e exibir a soma total e a média diária
 function exibirResultados() {
     // Calcular a soma total
     let somaTotal = despesas.reduce((total, valor) => total + valor, 0);
     // Calcular a média diária
     let mediaDiaria = somaTotal / 7;
     // Exibir os resultados nas divs correspondentes
     document.getElementById("somaTotal").textContent = `R$ ${somaTotal.toFixed(2)}`;
     document.getElementById("mediaDiaria").textContent = `R$ ${mediaDiaria.toFixed(2)}`;
     // Exibir as divs de resultado
     document.getElementById("somaTotal").style.display = "block";
     document.getElementById("mediaDiaria").style.display = "block";
 }

 // Função para editar o valor de uma despesa
 function editarDespesa(index) {
     let novoValor;
     do {
         novoValor = parseFloat(prompt(`Digite o novo valor da despesa para o Dia ${index + 1}:`));
         if (isNaN(novoValor)) {
             alert("Por favor, insira um valor válido.");
         }
     } while (isNaN(novoValor));
     despesas[index] = novoValor;
     // Atualizar a tabela com o novo valor editado
     atualizarTabela();
 }

 // Função para reiniciar o programa
 function reiniciar() {
     // Limpar o array de despesas
     despesas = [];
     // Reiniciar o loop para solicitar os valores da semana
     for (let i = 0; i < 7; i++) {
         let valor;
         do {
             valor = parseFloat(prompt(`Digite o valor da despesa para o Dia ${i + 1}:`));
             if (isNaN(valor)) {
                 alert("Por favor, insira um valor válido.");
             }
         } while (isNaN(valor));
         despesas.push(valor);
     }
     // Atualizar a tabela
     atualizarTabela();
 }

 // Chamar a função para inicializar a tabela
 atualizarTabela();