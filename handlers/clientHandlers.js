const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

function findClient(id) {
  return clients.find(client => client.id == id);
}

function findClientIndex(id) {
  return clients.findIndex(client => client.id == id);
}

function createClient(data) {
  const { age, name, gender, company, email, phone, address } = data;
  return {
    id: uuidv4(),
    isActive: true,
    age, name, gender, company, email, phone, address
  }
}

function handleClients(req, res) {
  res.status(200).json({ status: 200, clients: clients });
}

function handleClient(req, res, next) {
  const clientID = req.params.id;
  const client = findClient(clientID);

  if (client) {
    res.status(200).json({ status: 200, client });
  } else next();
}

function addNewClient(req, res) {
  const data = createClient(req.body);
  clients.push(data);

  res.status(201).json({ status: 201, data, message: "Client added!" });
}

function removeClient(req, res, next) {
  const clientID = req.params.id;
  const clientIndex = findClientIndex(clientID);

  if (clientIndex > 0) {
    clients.splice(clientIndex, 1);
    res.status(201).json({ status: 201, message: "Client deleted!" });
  } else next();
}

function handle404(req, res) {
  res.status(404).json({ status: 404 });
}

module.exports = { handleClients, handleClient,
                   addNewClient, removeClient,
                   handle404 }
