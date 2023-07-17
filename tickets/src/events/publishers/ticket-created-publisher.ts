import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@firoozej/ticketingshared";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
