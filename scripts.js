/*
--------------------------------------------------------------------------------------
Função para obter a lista existente do servidor via requisição GET
--------------------------------------------------------------------------------------
*/
const getList = async () => {
    let url = 'http://127.0.0.1:5000/apartamentos';
    fetch(url, {
      method: 'get',
    })
      .then((response) => response.json())
      .then((data) => {
        data.apartamentos.forEach(item => insertList(item.condominio, item.endereco, item.disposicao, item.valor))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
/*
--------------------------------------------------------------------------------------
Chamada da função para carregamento inicial dos dados
--------------------------------------------------------------------------------------
*/
getList()

/*
--------------------------------------------------------------------------------------
Função para colocar um item na lista do servidor via requisição POST
--------------------------------------------------------------------------------------
*/
const postItem = async (inputCondominio, inputEndereco, inputDisposicao, inputValor) => {
    const formData = new FormData();
    formData.append('condominio', inputCondominio);
    formData.append('endereco', inputEndereco);
    formData.append('disposicao', inputDisposicao);
    formData.append('valor', inputValor);

    let url = 'http://127.0.0.1:5000/apartamento';
    fetch(url, {
      method: 'post',
      body: formData
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
}
/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}
/*
--------------------------------------------------------------------------------------
Função para remover um item da lista de acordo com o click no botão close
--------------------------------------------------------------------------------------
*/
const removeElement = (row, condominio) => {
  if (confirm("Você tem certeza que deseja remover?")) {
      row.remove();  // Remove a linha da tabela
      deleteItem(condominio);  // Chama a função para deletar no servidor
      alert("Removido com sucesso!");
  }
}

/*
--------------------------------------------------------------------------------------
Função para deletar um item da lista do servidor via requisição DELETE
--------------------------------------------------------------------------------------
*/
const deleteItem = (condominio) => {
    let url = 'http://127.0.0.1:5000/apartamento?condominio=' + condominio;
    fetch(url, {
      method: 'delete'
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });
}

/*
--------------------------------------------------------------------------------------
Função para adicionar um novo apartamento com nome do condomínio, endereço, disposição e valor
--------------------------------------------------------------------------------------
*/
const newItem = () => {
    let inputCondominio = document.getElementById("novoCondominio").value;
    let inputEndereco = document.getElementById("novoEndereco").value;
    let inputDisposicao = document.getElementById("novaDisposicao").value;
    let inputValor = document.getElementById("novoValor").value;

    if (inputCondominio === '' || inputEndereco === '') {
      alert("Preencha todos os campos!");
    } else if (isNaN(inputValor)) {
      alert("O valor precisa ser um número!");
    } else {
      insertList(inputCondominio, inputEndereco, inputDisposicao, inputValor);
      postItem(inputCondominio, inputEndereco, inputDisposicao, inputValor);
      alert("Apartamento adicionado!");
    }
}

/*
--------------------------------------------------------------------------------------
Função para inserir itens na lista apresentada
--------------------------------------------------------------------------------------
*/
const insertList = (condominio, endereco, disposicao, valor) => {
  var item = [condominio, `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}" target="_blank">${endereco}</a>`, disposicao, valor];
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
      var cel = row.insertCell(i);
      cel.innerHTML = item[i]; // Mude de textContent para innerHTML
  }

  // Criar e adicionar o botão de excluir
  const deleteBtn = document.createElement("span");
  deleteBtn.className = "close";
  deleteBtn.textContent = "\u00D7"; // Símbolo para excluir
  deleteBtn.onclick = function () {
      if (confirm("Você tem certeza que deseja remover este item?")) {
          row.remove(); // Remove a linha da tabela
          const condominio = row.cells[0].textContent; // Obtém o nome do condomínio
          deleteItem(condominio); // Chama a função para excluir do servidor
          alert("Apartamento removido!");
      }
  };

  // Adiciona o botão de excluir na última célula da linha
  var btnCell = row.insertCell(-1); // Cria uma nova célula para o botão
  btnCell.appendChild(deleteBtn); // Adiciona o botão à célula

  // Limpa os campos de entrada
  document.getElementById("novoCondominio").value = "";
  document.getElementById("novoEndereco").value = "";
  document.getElementById("novaDisposicao").value = "";
  document.getElementById("novoValor").value = "";
}
