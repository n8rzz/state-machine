export class CounterView {
    private _contextView: HTMLElement = null;
    private _currentValueView: HTMLElement = null;
    private _currentValue: number = 0;

    constructor() {
        this._contextView = document.getElementsByClassName('js-counterContextName')[0] as HTMLElement;
        this._currentValueView = document.getElementsByClassName('js-counterCurrentValue')[0] as HTMLElement;
    }

    public update(currentContext: string, nextValue: number): void {
        this._updateCurrentValue(nextValue);

        this._contextView.innerText = currentContext;
        this._currentValueView.innerText = String(this._currentValue);
    }

    private _updateCurrentValue(nextValue: number): void {
        this._currentValue = nextValue;
    }
}
