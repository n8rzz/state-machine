import { IContext } from './IContext';
import { CounterContextEnum } from './CounterContextEnum';

export class CounterModel implements IContext {
    public currentContext: CounterContextEnum = CounterContextEnum.NeutralContext;

    private _value: number = 0;

    get contextName(): string {
        return CounterContextEnum[this.currentContext];
    }

    get currentValue(): number {
        return this._value;
    }

    public decrement(): void {
        this._value -= 1;
    }

    public increment(): void {
        this._value += 1;
    }
}
