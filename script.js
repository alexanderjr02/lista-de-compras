//Pega os dados da lista 
const inpuItem = document.getElementById("input-item")
const buttonItem = document.getElementById("button-item")
const form = document.querySelector("form")
const lista = document.getElementById("lista").querySelector("ul")
const iconeRemove = document.getElementById("remove")
const mensagemRemovida = document.getElementById("mensagem-item")
const tiraMensagem = document.getElementById("tira-mensagem")

inpuItem.addEventListener("input" , (e) => {
    e.preventDefault()
    return inpuItem.value
})

form.addEventListener("submit" , (e) => {
  e.preventDefault()
   
  
  // Cria o novo item
  let li = document.createElement("li");

  // Cria um ID único para o checkbox
  let checkboxId = `item${Date.now()}`;

  // Define o conteúdo do item
  li.innerHTML = `
    <div class="item-texto">
      <input type="checkbox" id="${checkboxId}">
      <label for="${checkboxId}">${inpuItem.value}</label>
    </div>
    <img  id="remove" src="img/icon delete.png" alt="icone delete" class="delete-icon">
  `;

  // Adiciona o item à lista
  lista.appendChild(li);
  
  inpuItem.value = "";
})

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-icon")) {
    // Remove o <li> correspondente
    e.target.closest("li").remove();
    mensagemRemovida.style.display = "flex";
  }
});

mensagemRemovida.addEventListener("click" ,  (e) => {
    mensagemRemovida.style.display = "none"
})
