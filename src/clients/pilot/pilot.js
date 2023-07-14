const {
  createPilotConnection,
  createPilotAirlineConnection,
} = require("../index.clients");
const pilotConnection = createPilotConnection();
const pilotAirlineConnection = createPilotAirlineConnection();

// emitting a request for all flights and handling the resieved flights
pilotConnection.emit("getAllflights");
pilotConnection.on("sendAllFlights", (allflights) => {
  const flightIDs = allflights.map((flight) => flight.flightID).join(", ");

  if (allflights.length != 0) {
    console.log(
      `sorry i was sleeping , i didn't catch these flights ==> ${flightIDs} `
    );
  }
});
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
    pilotConnection.emit("delete", flightDetails.flightID);
    console.log(
      `==> Pilot: Flight with ID '${flightDetails.flightID}' just arrived to ${flightDetails.destination}`
    );
  }, 7000);
}
