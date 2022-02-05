import {makeNormalArray, sortArray, uniqueArray} from './arrayLib';

describe('arrayLib Testing', () => {
  it('uniqueArray', () => {
    expect(uniqueArray([1, 2, 3, 4, 5, 3])).toEqual([1, 2, 3, 4, 5]);
  });

  it('makeNormalArray', () => {
    expect(
      makeNormalArray([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('sortArray', () => {
    expect(sortArray([1, 3, 2])).toEqual([1, 2, 3]);
  });
});
