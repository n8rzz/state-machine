import { IContext } from './IContext';
import { CounterContextEnum } from './CounterContextEnum';

export class CounterModel implements IContext {
    public currentContext: CounterContextEnum = CounterContextEnum.NeutralContext;
    public target: number = 0;
    public value: number = 0;

    get contextName(): string {
        return CounterContextEnum[this.currentContext];
    }

    get currentValue(): number {
        return this.value;
    }

    public decrement(): void {
        this.value -= 1;
    }

    public increment(): void {
        this.value += 1;
    }

    public updateTarget(targetModifier: number): void {
        this.target += targetModifier;
    }
}
