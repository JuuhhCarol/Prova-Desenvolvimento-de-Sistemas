import { registerTicketDTO, updateTicketDTO} from "../dtos/ticketDTO.js";

export async function CreateTicket(data: registerTicketDTO) {
    const { title, description, sector, priority, status } = data;
    const createdAt = new Date();
    const product = new ticket({ title, description, sector, priority, status });
    return await product.save();
}

export async function showTicket(filters: findTicketDTO) {
    const query: any = {};

    if (filters.title) {
        query.title = { $regex: filters.title, $options: "i" };
    }

    if (filters.sector) {
        query.sector = filters.sector;
    }

    if (filters.id) {
        query.id = { $gt: 0 };
    }

    return await ticket.find(query).select("-__v");
}

export async function getTicketById(id: string) {
    return await ticket.findById(id).select("-__v");
}

export async function updateTicket(id: string, data: updateTicketDTO) {
    return await ticket.findByIdAndUpdate(id, data, { new: true }).select("-__v");
}

export async function deleteTicket(id: string) {
    return await ticket.findByIdAndDelete(id);
}




export const showTicketById = async(id)=>{
}
