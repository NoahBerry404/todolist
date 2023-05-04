const app = require('./src/backend/app.js');
const debug = require('debug')('node-angular');
const http = require('http');
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)){
    return val;
  }
  if (port > 0){
    return port;
  }

  return false;
}

const onError = error => {
  if(error.syscall!== "listen"){
    throw error;
  }

  switch(error.code){
    case "EACCES":
      console.error(bind + " requires elevated priveledges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("listening on " + bind);
  console.log("listening on " + bind);
}

const port = normalizePort(process.env.PORT || 3000);
app.set("port",port);

const server = http.createServer(app);
server.on("error",onError);
server.on("listening",onListening);
server.listen(port);
