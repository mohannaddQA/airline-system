const {
  createPilotConnection,
  createPilotAirlineConnection,
} = require("../index.clients");
const pilotConnection = createPilotConnection();
const pilotAirlineConnection = createPilotAirlineConnection();

// functions to handle the new flight event
// take off and arrive functions will be fired and ==>  emitt the event of taking off and arriving
pilotConnection.on("newFlightEvent", TakeOff);
pilotConnection.on("newFlightEvent", arrive);

function TakeOff(flightDetails) {
  setTimeout(() => {
    console.log(
      `==> Pilot: Flight with ID '${flightDetails.flightID}' just took off to ${flightDetails.destination}`
    );
    pilotConnection.emit("tookOffEvent", flightDetails);
  }, 4000);
}
function arrive(flightDetails) {
  setTimeout(() => {
    pilotConnection.emit("arrivedflightEvent", flightDetails);
    console.log(
      `==> Pilot: Flight with ID '${flightDetails.flightID}' just arrived to ${flightDetails.destination}`
    );
  }, 7000);
}
