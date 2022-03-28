import express from 'express';
import cors from 'cors';
import { Routes } from './Routes'; 
import './database';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
    }
    routes() {
       this.server.use(Routes);
    }
}

export default new App().server;