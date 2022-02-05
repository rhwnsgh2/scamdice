import {splitWithCost} from './calPercent';
describe('calcPercent', () => {
  it('splitWithCost', () => {
    const allChampion = splitWithCost([
      {cost: 1, name: '가렌'},
      {cost: 1, name: '카사딘'},
      {cost: 2, name: '카타리나'},
      {cost: 3, name: '자크'},
      {cost: 4, name: '문도 박사'},
      {cost: 5, name: '아칼리'},
    ]);
    expect(allChampion.cost1).toEqual([
      {cost: 1, name: '가렌'},
      {cost: 1, name: '카사딘'},
    ]);
    expect(allChampion.cost2).toEqual([{cost: 2, name: '카타리나'}]);
  });
});
