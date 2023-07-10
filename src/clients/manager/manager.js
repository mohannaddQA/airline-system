const uuid = require("uuid");
const { faker } = require("@faker-js/faker");
const { createManagerConnection } = require("../index.clients");
const managerConnection = createManagerConnection();

// schedual a new flight every 10 sec
setInterval(NewFlight, 10000);

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
  managerConnection.emit("newFlightEvent", flightDetails);
}
/*-------------------------------------------------------------------*/
// functions to handle the arrived flight Event: console somthing and emitt
managerConnection.on("arrivedflightEvent", arrivedflightEventHandler);
function arrivedflightEventHandler(flightDetails) {
  setTimeout(() => {
    console.log(
      `********************************************
==> Manager: welcome to ${flightDetails.destination} , we're greatful for your service captine ${flightDetails.pilotName}
******************************************** `
    );
  }, 500);
}
