import TicketTypeRequest from './lib/TicketTypeRequest.js';
import InvalidPurchaseException from './lib/InvalidPurchaseException.js';
import TicketPaymentService from '../thirdparty/paymentgateway/TicketPaymentService.js';
import SeatReservationService from '../thirdparty/seatbooking/SeatReservationService.js';

export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
    if(ticketTypeRequests.length <= 0){
      throw InvalidPurchaseException;
    }else if(ticketTypeRequests.length > 20){
      throw InvalidPurchaseException;
    }else{
      // console.log("It's working")
      let ticketType = this.#getNumSeatsAmount(...ticketTypeRequests);
    }
  }

  // Gets the number of seats for each category of Ticket
  #getNumSeatsAmount(ticketTypeRequests){
    let noInfant = 0;
    let noChild = 0;
    let noAdult = 0;
    let totalAmount = 0;
    let amount = {
      infant : 0,
      child : 10,
      adult : 20
    }
    ticketTypeRequests.forEach(ticket => {
      switch(ticket.getTicketType()){
        case "INFANT":
          noInfant += ticket.getNoOfTickets(); 
          break;
        case "CHILD":
          noChild += ticket.getNoOfTickets();
          break;
        case "ADULT":
          noAdult += ticket.getNoOfTickets();
          break;
        default:
          throw InvalidPurchaseException
      }
    });
    
    // Get the total amount to pay
    totalAmount = amount.infant * noInfant + amount.child * noChild + amount.adult * noAdult;

    // Assumption: Only one Adult or Child is permitted to hold one Infant
    if(noAdult + noChild < noInfant){
      throw InvalidPurchaseException
    }

    return {
      noInfant,
      noChild,
      noAdult,
      totalAmount
    }
  }
}