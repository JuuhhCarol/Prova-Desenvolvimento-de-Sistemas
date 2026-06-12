import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

export const validateTicket = (req: Request, res: Response, next: NextFunction) => {
    const { title, description, sector, priority, status} = req.body;

    if (!title || description || sector || priority === undefined) {
        return res.status(400).send({ response: " Preencha os campos obrigatórios." })
    }

    next();
}

export const validateObjectId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    //mudar middleware

    next();
};
