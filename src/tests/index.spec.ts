import { helloWorld } from '../index';

test('helloWorld function', () => {
    expect(helloWorld()).toBe("Hello, world!");
});