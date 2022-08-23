import TicketService from "../src/pairtest/TicketService";

describe("TicketService methods testing", () => {
  const ticketService = new TicketService()
  test("Empty parameters", () => {
    expect(ticketService.purchaseTickets()).toBe(undefined)
  })
})
