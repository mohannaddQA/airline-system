const { createSystemConnection } = require("../index.clients");
const systemConnection = createSystemConnection();

systemConnection.on("newFlightEvent", NewFlightLog);
systemConnection.on("tookOffEvent", tookOffLog);
systemConnection.on("arrivedflightEvent", arrivedflightLog);
systemConnection.on("getAllflights", sendTheFlights);
systemConnection.on("delete", deleteFlight);
// an object that will save the flights untill we are assured that they are taken by the pilot
const savedFlightsQueue = {
  flights: {},
};

function NewFlightLog(flightDetails) {
  savedFlightsQueue.flights[flightDetails.flightID] = flightDetails;

  console.log(`***
Flight: {
event: 'new flight'
time: ${new Date().toISOString()}
Details: ${`
flightID: ${flightDetails.flightID}
airLine: Royal Jordanian Airlines
destination: ${flightDetails.destination}
pilotName: ${flightDetails.pilotName}
`}}
`);
}

function tookOffLog(flightDetails) {
  console.log(
    `
***
Flight: {
event: 'flight took off'
time: ${new Date().toISOString()}
Details: ${`
flightID: ${flightDetails.flightID}
airLine: Royal Jordanian Airlines
destination: ${flightDetails.destination}
pilotName: ${flightDetails.pilotName}
`}}`
  );
}

function arrivedflightLog(flightDetails) {
  console.log(
    `
***
Flight: {
event: 'flight arrive'
time: ${new Date().toISOString()}
Details: ${`
flightID: ${flightDetails.flightID}
airLine: Royal Jordanian Airlines
destination: ${flightDetails.destination}
pilotName: ${flightDetails.pilotName}
`}}`
  );
}

// a function to handle sending the flights to the pilot
function sendTheFlights() {
  const allflights = Object.values(savedFlightsQueue.flights); //array of objects
  systemConnection.emit("sendAllFlights", allflights);
  savedFlightsQueue.flights = {};
  console.log(
    ` the pilot requested all the flights ==> All flights are sent to the pilot`
  );
}

function deleteFlight(flightID) {
  delete savedFlightsQueue.flights[flightID];
}
