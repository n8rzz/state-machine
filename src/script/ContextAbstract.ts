import { IContext } from './IContext';

export class ContextAbstract {
    public model: IContext = null;

    private _name: string = '';

    constructor(model: IContext) {
        this.model = model;
    }

    public update(): void {
        throw new Error('ContextAbstract#update not implemented');
    }
}
