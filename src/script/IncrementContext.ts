import { ContextAbstract } from './ContextAbstract';
import { IContext } from './IContext';
import { CounterContextEnum } from './CounterContextEnum';

export class IncrementContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.model.currentContext = CounterContextEnum.IncrementContext;
    }

    public update(): void {
        this.model.increment();
    }
}
