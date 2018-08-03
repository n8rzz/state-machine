import { ContextAbstract } from './ContextAbstract';
import { IContext } from '../IContext';
import { CounterContextEnum } from './CounterContextEnum';
import { NeutralContext } from './NeutralContext';

export class IncrementContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralContext;
    }

    public onEnter(): void {
        super.onEnter();

        this.model.currentContext = CounterContextEnum.IncrementContext;
    }

    public shouldMoveToNextContext(): boolean {
        console.log('T', this.model.target, Math.abs(this.model.value) >= this.model.target);

        return Math.abs(this.model.value) >= this.model.target;
    }

    public update(): void {
        this.model.increment();
    }
}
