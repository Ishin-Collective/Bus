import { Event, Listener } from "..";

export default class Bus {
    private events: Map<Event, Listener<Event>[]> = new Map();

    Listen(listener: Listener<any>) {
        
        this.events.set();
    }
}