import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { handleCancelMatch, handleDisconnect, handleMatch } from './controller/matching-controller.js';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
  origin: ['http://localhost:3000'],
})) // config cors so that front-end can use
app.options('*', cors())

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  handleMatch(socket);
  handleCancelMatch(socket);
  handleDisconnect(socket);
});

app.get('/', (req, res) => {
  res.send('Hello World from matching-service');
});

const PORT = 8001;
httpServer.listen(PORT, () => console.log(`matching-service listening on port ${PORT}`));
