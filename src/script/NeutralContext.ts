import { ContextAbstract } from './ContextAbstract';
import { IContext } from './IContext';
import { CounterContextEnum } from './CounterContextEnum';

export class NeutralContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.model.currentContext = CounterContextEnum.NeutralContext;
    }

    public update(): void {
        return;
    }
}
