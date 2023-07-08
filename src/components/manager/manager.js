const uuid = require("uuid");
const { faker } = require("@faker-js/faker");
const airLineEvents = require("../../events");
/*-------------------------------------------------------------------*/
// functions : schedual a flight ==> and emitt the new flight
function NewFlight() {
  const flightDetails = {
    flightID: uuid.v4(),
    pilotName: faker.person.fullName(),
    destination: faker.location.country(),
  };

  airLineEvents.emit("newFlight", flightDetails);
}
/*-------------------------------------------------------------------*/

module.exports = { NewFlight };
