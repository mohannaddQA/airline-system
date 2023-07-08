const uuid = require("uuid");
const { faker } = require("@faker-js/faker");
const airLineEvents = require("../../events.singleton");

/*-------------------------------------------------------------------*/
// function: schedual a flight ==> and emitt the new flight with the flight details
function NewFlight() {
  const flightDetails = {
    flightID: uuid.v4(),
    airLine: "Royal Jordanian Airlines",
    pilotName: faker.person.fullName(),
    destination: faker.location.country(),
  };
  console.log(
    `Manager: New flight with ID '${flightDetails.flightID}' has been scheduled`
  );
  airLineEvents.emit("newFlightEvent", flightDetails);
}
/*-------------------------------------------------------------------*/
// functions to handle the arrived flight Event: console somthing and emitt
airLineEvents.on("arrivedflightEvent", arrivedflightEventHandler);
function arrivedflightEventHandler(flightDetails) {
  setTimeout(() => {
    console.log(
      `********************************************
==> Manager: welcome to ${flightDetails.destination} , we're greatful for your service captine ${flightDetails.pilotName}
******************************************** `
    );
  }, 500);
}
module.exports = { NewFlight };
