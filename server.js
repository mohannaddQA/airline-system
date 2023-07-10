require("dotenv").config();
const port = process.env.PORT || 3080;
const ioServer = require("socket.io")(port);
const airlineSocet = ioServer.of("/airline");

/* establishing the server connection  */

ioServer.on("connection", (socket) => {
  console.log("connected ", socket.id);

  socket.on("newFlightEvent", (flightDetails) => {
    ioServer.emit("newFlightEvent", flightDetails);
  });
  socket.on("tookOffEvent", (flightDetails) => {
    ioServer.emit("tookOffEvent", flightDetails);
  });
  socket.on("arrivedflightEvent", (flightDetails) => {
    ioServer.emit("arrivedflightEvent", flightDetails);
  });
});

airlineSocet.on("connection", (socket) => {
  console.log("A pilot connected to airline");
});
