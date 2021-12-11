'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

const tempClient = {
  nome : "Carla",
  email : "shimada@hotmail.com",
  celular : "43984365454",
  cidade : "Londrina"
}

const createClient = (client) => {
  const db_client = JSON.parse(localStorage.getItem('db_client'));
  console.log(db_client);
  db_client.push(client);
  localStorage.setItem("db_client", JSON.stringify(db_client));
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);
