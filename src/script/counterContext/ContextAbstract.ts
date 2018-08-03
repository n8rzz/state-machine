import { IContext } from '../IContext';

export class ContextAbstract {
    public model: IContext = null;

    private _name: string = '';

    constructor(model: IContext) {
        this.model = model;
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