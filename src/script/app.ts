import { CounterController } from './counter/CounterController';

export class App {
    private _counterController: CounterController = null;

    constructor() {
        this._counterController = new CounterController();
    }

    public update(): void {
        this._counterController.update();
    }
}
