import { CounterContextEnum } from './counterContext/CounterContextEnum';

export interface IContext {
    currentContext: CounterContextEnum;
    target: number;
    value: number;
    increment: () => void;
    decrement: () => void;
    updateTarget: (targetModifier: number) => void;
}
