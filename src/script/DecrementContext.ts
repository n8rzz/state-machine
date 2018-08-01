import { ContextAbstract } from './ContextAbstract';
import { IContext } from './IContext';
import { CounterContextEnum } from './CounterContextEnum';

export class DecrementContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.model.currentContext = CounterContextEnum.DecrementContext;
    }

    public update(): void {
        this.model.decrement();
    }
}
