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

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []; 
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient));

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);
    
document.getElementById('salvar')
    .addEventListener('click', saveClient);
