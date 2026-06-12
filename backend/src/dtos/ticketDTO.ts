export interface registerTicketDTO {
    id : number;
    title : string;
    description : string; 
    sector : string;
    priority : string;
    status : string;
}

export interface findTicketDTO {
    id? : number;
    title?: string;
    sector? : string;
}

export interface updateTicketDTO {
    id? : number;
    title? : string;
    description? : string; 
    sector? : string;
    priority? : string;
    status? : string;
}
