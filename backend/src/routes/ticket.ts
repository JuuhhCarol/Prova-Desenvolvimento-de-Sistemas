import express from 'express';
import TicketController from '../controllers/TicketController.js';


const route = express.Router();

route
    .post('/create', TicketController.create)
    .get('/show', TicketController.show)
    .put('/update/:id', TicketController.update)
    .delete('/delete/:id', TicketController.delete)
    
export default route

