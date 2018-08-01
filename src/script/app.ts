import { CounterController } from './CounterController';

export class App {
    private counterController: CounterController = null;

    constructor() {
        this.counterController = new CounterController();
    }

    public update(): void {
        this.counterController.update();
    }
}
