import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('some class', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with mods', () => {
        expect(classNames('someClass', { pressed: true, blue: true })).toBe(
            'someClass pressed blue',
        );
    });
    test('with mods switched off', () => {
        expect(classNames('someClass', { pressed: false, blue: true })).toBe(
            'someClass blue',
        );
    });
    test('with additional', () => {
        expect(classNames('someClass', {}, ['red', 'large'])).toBe(
            'someClass red large',
        );
    });
    test('with additional and mods', () => {
        expect(
            classNames('someClass', { pressed: true, blue: true }, [
                'red',
                'large',
            ]),
        ).toBe('someClass red large pressed blue');
    });
    test('with equal mode name and additional class names', () => {
        expect(classNames('', { red: true }, ['red', 'red'])).toBe('red');
    });
    test('empty className', () => {
        expect(classNames('', { red: false }, ['  ', ''])).toBe('');
    });
    test('incorrect classNames filtering', () => {
        expect(
            classNames('Some class', { red: true }, [
                ' Very Very   red',
                'interesting    class  ',
            ]),
        ).toBe('someClass veryVeryRed interestingClass red');
    });
});
