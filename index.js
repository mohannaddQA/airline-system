// we must require all parts of the event system at the entry action point
const { NewFlight } = require("./src/components/manager/manager");
require("./src/components/pilot/pilot");
require("./src/components/system/system");
// schedual a new flight every 10 sec
setInterval(NewFlight, 10000);
