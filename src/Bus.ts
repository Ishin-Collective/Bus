import { Event, Listener } from ".";

export default class Bus {
    private listeners: Listener<Event>[] = [];

    Listen(listener: { new (): Listener<Event> }) {
        const subscribedListener = new listener();
        if(this.listeners.includes(subscribedListener)) {
            warn("Event Bus is already listening to this listener");
        } else {
            this.listeners.push(subscribedListener);
        }
    }

    Post(event: Event) {
        
    }
}