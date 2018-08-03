import { IContext } from '../IContext';

export class ContextAbstract {
    protected _model: IContext = null;
    protected _name: string = '';

    constructor(model: IContext) {
        this._model = model;
    }

    public getNextContext(): ContextAbstract {
        return null;
    }

    public onEnter(): void {
        console.log('onEnter');
    }

    public onExit(): void {
        console.log('onExit');
    }

    public shouldMoveToNextContext(): boolean {
        return false;
    }

    public update(): void {
        throw new Error('ContextAbstract#update not implemented');
    }
}
