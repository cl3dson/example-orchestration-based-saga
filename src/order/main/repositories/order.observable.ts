import {ObservableDataBase} from "../../domain/interfaces/observable.data.base";
import {injectable} from "inversify";
import {JSONMessage, MessagePublisher} from "mercury-messenger";

@injectable()
export class OrderObservable implements ObservableDataBase {
    @MessagePublisher()
    created(order) {
        return new JSONMessage("OrderCreated", order)
    }
}
