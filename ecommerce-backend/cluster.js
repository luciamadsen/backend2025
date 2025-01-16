const cluster = require('cluster');
const http = require('http');
const os = require('os');
const app = require('./app');

const numCPUs = os.cpus().length; 

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} murió`);
  });
} else {
  http.createServer(app).listen(3000, () => {
    console.log(`Servidor corriendo en puerto 3000, Worker: ${process.pid}`);
  });
}
