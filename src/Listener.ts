import { Event } from ".";

interface Listener<T extends Event> {
    onRun(event: T): void,
    onError?(err: unknown): void
}

export default Listener;
