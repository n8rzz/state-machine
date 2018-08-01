import { ContextAbstract } from './ContextAbstract';
import { IContext } from './IContext';

export class IncrementContext extends ContextAbstract {
    constructor(model: IContext) {
        super(model);
    }

    public update(): void {
        this.model.increment();
    }
}
