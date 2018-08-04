export class CounterView {
    private _$contextView: HTMLElement = null;
    private _$currentValueView: HTMLElement = null;
    private _$counterTargetValue: HTMLElement = null;
    private _currentValue: number = 0;

    constructor(contextView: HTMLElement, currentValueView: HTMLElement, counterTargetValue: HTMLElement) {
        this._$contextView = contextView;
        this._$currentValueView = currentValueView;
        this._$counterTargetValue = counterTargetValue;
    }

    public update(currentContext: string, nextValue: number, currentTargetValue: number): void {
        this._updateCurrentValue(nextValue);

        this._$contextView.innerText = currentContext;
        this._$currentValueView.innerText = String(this._currentValue);
        this._$counterTargetValue.innerText = String(currentTargetValue);
    }

    private _updateCurrentValue(nextValue: number): void {
        this._currentValue = nextValue;
    }
}
