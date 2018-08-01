import { CounterContextEnum } from './CounterContextEnum';

export interface IContext {
    currentContext: CounterContextEnum;
    increment: () => void;
    decrement: () => void;
}
