import { CounterView } from './CounterView';
import { CounterModel } from './CounterModel';
import { DecrementContext } from './counterContext/DecrementContext';
import { IncrementContext } from './counterContext/IncrementContext';
import { NeutralContext } from './counterContext/NeutralContext';
import { ContextAbstract } from './counterContext/ContextAbstract';

let i: number = 0;

export class CounterController {
    private _model: CounterModel = null;
    private _view: CounterView = null;
    private _context: ContextAbstract = null;
    private _$increaseBtn: HTMLButtonElement = null;
    private _$decreaseBtn: HTMLButtonElement = null;
    private _onClickDecreaseHandler: (event: UIEvent) => void = this._onClickDecrease.bind(this);
    private _onClickIncreaseHandler: (event: UIEvent) => void = this._onClickIncrease.bind(this);

    constructor() {
        this._model = new CounterModel();
        this._context = new NeutralContext(this._model);

        return this._createChildren()
            ._setupHandlers();
    }

    public update(): void {
        this._context.update();
        this._view.update(this._model.contextName, this._model.currentValue, this._model.target);

        if (this._context.shouldMoveToNextContext()) {
            this._updateContext(this._context.getNextContext());
        }

        i++;
    }

    private _updateContext(NextContext: any): void {
        if (this._context instanceof NextContext) {
            return;
        }

        this._context.onExit();
        this._context = new NextContext(this._model);
    }

    private _createChildren(): this {
        const contextView = document.getElementsByClassName('js-counterContextName')[0] as HTMLElement;
        const currentValueView = document.getElementsByClassName('js-counterCurrentValue')[0] as HTMLElement;
        const counterTargetValue = document.getElementsByClassName('js-counterTargetValue')[0] as HTMLElement;

        this._$decreaseBtn = document.getElementsByClassName('js-btn-decrease')[0] as HTMLButtonElement;
        this._$increaseBtn = document.getElementsByClassName('js-btn-increase')[0] as HTMLButtonElement;
        this._view = new CounterView(contextView, currentValueView, counterTargetValue);

        return this;
    }

    private _setupHandlers(): this {
        this._$decreaseBtn.addEventListener('click', this._onClickDecreaseHandler);
        this._$increaseBtn.addEventListener('click', this._onClickIncreaseHandler);

        return this;
    }

    private _onClickDecrease(event: UIEvent): void {
        event.preventDefault();

        const nextTarget: number = -5;

        this._model.updateTarget(nextTarget);
        this._updateContext(DecrementContext);
    }

    private _onClickIncrease(event: UIEvent): void {
        event.preventDefault();

        const nextTarget: number = 5;

        this._model.updateTarget(nextTarget);
        this._updateContext(IncrementContext);
    }
}
