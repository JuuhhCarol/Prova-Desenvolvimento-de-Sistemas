import { Express } from 'express';
import express from 'express';
import product from './ticket.js';
import TicketController from '../controllers/TicketController.js';


export default function (app: Express) {
    app
        .use(express.json())
        .use('/api/ticket', TicketController)
}