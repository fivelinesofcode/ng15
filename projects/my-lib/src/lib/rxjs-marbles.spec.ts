import { TestScheduler } from 'rxjs/testing';
import { throttleTime, delay } from 'rxjs';
import {expect, jest, test} from '@jest/globals'

describe('Rxjs marbles', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('generates the stream correctly', () => {
    testScheduler.run((helpers) => {
      const { time, cold, expectObservable } = helpers;
      const source = cold('--a|');
      const t = time('       -| ');
      const expected = '   ---a|';
      const result = source.pipe(delay(t));
      expectObservable(result).toBe(expected);
    });
  });
});
