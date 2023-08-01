import { Subjects, Publisher, OrderCancelledEvent } from '@firoozej/ticketingshared';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
