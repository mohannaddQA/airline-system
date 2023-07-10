require("dotenv").config();
const port = process.env.PORT || 3080;
const ioClients = require("socket.io-client");

/*establishing the client connections */

let host = `http://localhost:${port}/`;
let pilotHost = `http://localhost:${port}/airline`;

const createSystemConnection = () => {
  return ioClients.connect(host);
};
const createManagerConnection = () => {
  return ioClients.connect(host);
};
const createPilotConnection = () => {
  return ioClients.connect(host);
};
const createPilotAirlineConnection = () => {
  return ioClients.connect(pilotHost);
};

module.exports = {
  createSystemConnection,
  createManagerConnection,
  createPilotConnection,
  createPilotAirlineConnection,
};
