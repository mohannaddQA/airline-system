// const airLineEvents = require("../../events.singleton");

// // functions to handle the new flight event
// // take off and arrive functions will be fired and ==>  emitt the event of taking off and arriving
// airLineEvents.on("newFlightEvent", TakeOff);
// airLineEvents.on("newFlightEvent", arrive);

// function TakeOff(flightDetails) {
//   setTimeout(() => {
//     airLineEvents.emit("tookOffEvent", flightDetails);
//   }, 4000);
// }
// function arrive(flightDetails) {
//   setTimeout(() => {
//     airLineEvents.emit("arrivedflightEvent", flightDetails);
//   }, 7000);
// }
