const airLineEvents = require("../../events.singleton");

airLineEvents.on("newFlightEvent", NewFlightLog);
airLineEvents.on("tookOffEvent", tookOffLog);
airLineEvents.on("arrivedflightEvent", arrivedflightLog);

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
    `******************************************** 
==> Pilot: Flight with ID '${flightDetails.flightID}' just took off to ${
      flightDetails.destination
    }
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
    `********************************************
==> Pilot: Flight with ID '${flightDetails.flightID}' just arrived to ${
      flightDetails.destination
    }
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
