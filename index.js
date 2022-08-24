import TicketService from "./src/pairtest/TicketService.js";
import TicketTypeRequest from "./src/pairtest/lib/TicketTypeRequest.js";

const ticketService = new TicketService();
const adults = new TicketTypeRequest("ADULT", 3);
const infants = new TicketTypeRequest("INFANT", 5);
const children = new TicketTypeRequest("CHILD", 5);

ticketService.purchaseTickets(-1, [adults, infants, children]);