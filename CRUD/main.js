'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');

}

const tempClient = {
  nome : "Carla",
  email : "carla@hotmail.com",
  celular : "43984365454",
  cidade : "Londrina"
}
//CRUD delete
const deleteClient = (index) => {
  const dbClient = readClient();
  dbClient.splice(index, 1);
  setLocalStorage(dbClient);
}

//CRUD update
const updateClient = (index, client) => {
  const dbClient = readClient();
  dbClient[index] = client;
  setLocalStorage(dbClient);
}

//CRUD read
const readClient = () => getLocalStorage();

// CRUD create
const createClient = (client) => {
  const dbClient = getLocalStorage();
  dbClient.push(client);
  setLocalStorage(dbClient); 
  
}

const clearFields = () => {
  const fields = document.querySelectorAll('.modal-field');
  fields.forEach(field => field.value = '');
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []; 
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

const isValidFields = () => {
  return document.getElementById('form').reportValidity();
}

// Interação com o layout
const saveClient = () => {
  if (isValidFields()){
    const client = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      celular: document.getElementById('celular').value,
      cidade: document.getElementById('cidade').value
    }
    
  createClient(client);
  closeModal();
  }
}

const createRow = (client) => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.email}</td>
    <td>${client.celular}</td>
    <td>${client.cidade}</td>
    
    <td>
      <button type = "button" class = "button green"> editar </button>
      <button type = "button" class = "button red"> excluir </button>

    </td>
    
  ` 
  document.querySelector('#tableClient>tbody').appendChild(newRow);
}

const updateTable = () => {
  const dbClient = readClient();
  dbClient.forEach(createRow);
}

updateTable();



// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);
    
document.getElementById('salvar')
    .addEventListener('click', saveClient);
document.getElementById('cancelar')
    .addEventListener('click', closeModal);
