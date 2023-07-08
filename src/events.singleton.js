/*singleton pattern design*/
/* ensures that a class has only one instance & provides a global point of access to this instance */
/*in this case our global instance (object) is 'airLineEvents' created from the class 'events' */

// first we have to require the emitter class , then create an instance (object) from the emitter class which will have all our events features
const events = require("events");
const airLineEvents = new events();
module.exports = airLineEvents;
