import { CounterModel } from './CounterModel';
import { DecrementContext } from './DecrementContext';
import { IncrementContext } from './IncrementContext';
import { NeutralContext } from './NeutralContext';

let i: number = 0;

export class CounterController {
    private _model: CounterModel = null;
    private _context: DecrementContext | IncrementContext | NeutralContext = null;

    constructor() {
        this._model = new CounterModel();
        this._context = new NeutralContext(this._model);
    }

    public update(): void {
        this._context.update();
        this._updateContext();

        i++;
    }

    private _updateContext(): void {
        if (this._model.currentValue > 10) {
            console.log('IncrementContext', this._model.currentValue);

            this._context = new IncrementContext(this._model);

            return;
        } else if (this._model.currentValue % 15 === 0) {
            console.log('DecrementContext', this._model.currentValue);

            this._context = new DecrementContext(this._model);

            return;
        }
    }
}
