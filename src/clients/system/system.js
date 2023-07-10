const { createSystemConnection } = require("../index.clients");
const systemConnection = createSystemConnection();

systemConnection.on("newFlightEvent", NewFlightLog);
systemConnection.on("tookOffEvent", tookOffLog);
systemConnection.on("arrivedflightEvent", arrivedflightLog);

function NewFlightLog(flightDetails) {
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
event: 'new flight'
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
event: 'new flight'
time: ${new Date().toISOString()}
Details: ${`
flightID: ${flightDetails.flightID}
airLine: Royal Jordanian Airlines
destination: ${flightDetails.destination}
pilotName: ${flightDetails.pilotName}
`}}`
  );
}
