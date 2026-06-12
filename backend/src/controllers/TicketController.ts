import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import CryptoJS from 'crypto-js';
import bcrypt from "bcryptjs";
import { deleteTicket, showTickets, updateTicket } from "../services/ticketService.js";

dotenv.config();

export default class TicketController {
    static async create(req: Request, res: Response): Promise<any> {
        const { title, description, sector,priority } = req.body;

        const ticket = new Ticket({
            title,
            description,
            sector,
            priority
        });

        try {
            await ticket.save();
            return res.status(201).send({ message: "Ticket cadastrado com sucesso." });
        } catch (error) {
            return res.status(500).send({ message: "Algo falhou." });
        }
    }
    
    
    static async show(req: Request, res: Response) {
        try {
            const ticket = await showTickets();

            return res.status(200).send(ticket);
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }

    static async update(req: Request, res: Response) {
        const { id } = req.params;
        const data: updateTicketDto = req.body;
        try {
            await updateTicket(data);

            return res.status(200).send({ response: 'Ticket atualizado com sucesso!' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }


    static async delete(req: Request, res: Response) {
        const id = parseInt(req.params[0], 10);
        
        try {
            await deleteTicket(id);

            return res.status(200).send({ response: 'Ticket deletado com sucesso!' });
        }
        catch (e) {
            return res.status(500).send({ response: 'Ocorreu algum erro no servidor.' });
        }
    }

    static async start(req,res){
    }
    
    static async finish(req,res){
    }

    static async showById(req: Request, res: Response){
        try{
        }
        catch(e){
        }
    }
}

