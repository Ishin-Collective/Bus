import { Event } from "../index";

class onHitEvent extends Event {
    private hit: number;

    constructor(hit: number) {
        super();
        this.hit = hit;
    }

    
    getHits(): number {
        return this.hit;
    }
    
}

interface Listener<T extends Event> {
    onRun(event: T): void,
    onError?(err: Error): void
}

export default Listener;

class test implements Listener<onHitEvent> {
    onRun(event: onHitEvent): void {
        console.log(event.getHits());
    }
}

const listenToThis = new test();

listenToThis.onRun(new onHitEvent(5));