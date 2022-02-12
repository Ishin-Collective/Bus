import { Event, Bus } from "../index";

class TestEvent extends Event {
    private num: boolean;

    constructor(num: boolean) {
        super();
        this.num = num;
    }

    getNum(): boolean {
        return this.num;
    }
}

const newBus = new Bus();
newBus.Listen(TestEvent);

test('first test', () => {
    expect(true);
})