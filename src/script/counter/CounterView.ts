export class CounterView {
    private _element: HTMLElement = null;
    private _currentValue: number = 0;

    constructor(element: HTMLElement) {
        this._element = element;
    }

    public update(nextValue: number): void {
        this._updateCurrentValue(nextValue);

        this._element.innerText = String(this._currentValue);
    }

    private _updateCurrentValue(nextValue: number): void {
        this._currentValue = nextValue;
    }
}
