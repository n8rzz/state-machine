import { ContextAbstract } from './ContextAbstract';
import { IContext } from '../IContext';
import { CounterContextEnum } from './CounterContextEnum';
import { NeutralContext } from './NeutralContext';

export class DecrementContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralContext;
    }

    public onEnter(): void {
        super.onEnter();

        this._model.currentContext = CounterContextEnum.DecrementContext;
    }

    public shouldMoveToNextContext(): boolean {
        console.log('T', this._model.target, this._model.value <= this._model.target);

        return this._model.value <= this._model.target;
    }

    public update(): void {
        this._model.decrement();
    }
}
