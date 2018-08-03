import { ContextAbstract } from './ContextAbstract';
import { IContext } from './IContext';
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

        this.model.currentContext = CounterContextEnum.DecrementContext;
    }

    public shouldMoveToNextContext(): boolean {
        console.log('T', this.model.target, this.model.value <= this.model.target);

        return this.model.value <= this.model.target;
    }

    public update(): void {
        this.model.decrement();
    }
}
