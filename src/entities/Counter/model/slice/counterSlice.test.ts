import { CounterSchema } from 'entities/Counter';
import { counterReducer, counterActions } from './counterSlice';

describe('counter slice test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.increment()),
        ).toEqual({
            value: 11,
        });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(state as CounterSchema, counterActions.decrement()),
        ).toEqual({
            value: 9,
        });
    });
    test('working with undefined state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({
            value: -1,
        });
    });
});
