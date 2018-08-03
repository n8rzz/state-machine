import { ContextAbstract } from './ContextAbstract';
import { IContext } from '../IContext';
import { CounterContextEnum } from './CounterContextEnum';
import { IncrementContext } from './IncrementContext';

export class NeutralContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);

        this.onEnter();
    }

    public getNextContext(): any {
        return NeutralContext;
    }

    public onEnter(): void {
        super.onEnter();

        this.model.currentContext = CounterContextEnum.NeutralContext;
    }

    public shouldMoveToNextContext(): boolean {
        console.log('T', this.model.target, Math.abs(this.model.value) >= this.model.target);

        return false;
    }

    public update(): void {
        return;
    }
}
