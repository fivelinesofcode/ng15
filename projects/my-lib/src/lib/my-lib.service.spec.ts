import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { throttleTime, delay } from 'rxjs';
import {expect, jest, test} from '@jest/globals'

import { MyLibService } from './my-lib.service';

describe('MyLibService', () => {
  let service: MyLibService;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it.only('generates the stream correctly', () => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    testScheduler.run((helpers) => {
      const { time, cold, expectObservable } = helpers;
      const source = cold('--a|');
      //const t = time('');
      const expected = '--a|';
      const result = source;
      expectObservable(result).toBe(expected);
    });
  });
});
