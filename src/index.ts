export { default as Bus } from "./Bus";
export { default as Event } from "./Event";
export { default as Listener } from "./Listener";

import { Bus, Event, Listener } from ".";

const mod = new Bus();

class hitEvent extends Event {
    private damage: number;
    
    constructor(damage: number) {
        super();
        this.damage = damage;
    }

    getDamage(): number {
        return this.damage;
    }
}

const testHit = new hitEvent(5);

class hasBeenHit implements Listener<hitEvent> {
    onRun(event: hitEvent): void {
        print(event.getDamage());
    }
}

mod.Listen(hasBeenHit)