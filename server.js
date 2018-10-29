const Hapi = require('hapi');

// Store the hosting server and the port
const host = 'localhost';
const port = 3020;

// Lets create the server here
const server = Hapi.Server({
    host: host,
    port: port
});

const init = async () => {

    await server.start();
    console.log("SUO Mock API Server up and running at port: " + port);

};

require('./routes/routes')(server);


init();
