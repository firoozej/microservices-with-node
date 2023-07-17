import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@firoozej/ticketingshared";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
