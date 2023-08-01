import { Publisher, OrderCreatedEvent, Subjects } from '@firoozej/ticketingshared';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
