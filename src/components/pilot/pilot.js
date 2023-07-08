const airLineEvents = require("../../events");

// functions to handle the new flight event : take off and arrive ==> console somthing and emitt
airLineEvents.on("newFlightEvent", TakeOff);
airLineEvents.on("newFlightEvent", arrive);

function TakeOff(flightDetails) {
  setTimeout(() => {
    console.log(
      `******************************************** 
==> Pilot: Flight with ID '${flightDetails.flightID}' just took off to ${flightDetails.destination}`
    );
    airLineEvents.emit("tookOffEvent", flightDetails);
  }, 4000);
}
function arrive(flightDetails) {
  setTimeout(() => {
    console.log(
      `********************************************
==> Pilot: Flight with ID '${flightDetails.flightID}' just arrived to ${flightDetails.destination} `
    );
    airLineEvents.emit("arrivedflightEvent", flightDetails);
  }, 7000);
}
