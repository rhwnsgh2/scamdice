import {splitWithPrice} from './calPercent';
import {findAllChampion, findSynergy, championInfo} from './findLib';
export const rerollPercent = [
  [75, 25, 0, 0, 0],
  [55, 30, 15, 0, 0],
  [45, 33, 20, 2, 0],
  [25, 40, 30, 5, 0],
  [19, 30, 35, 15, 1],
  [15, 20, 35, 25, 5],
  [10, 15, 30, 30, 15],
  [5, 10, 20, 40, 25],
  [1, 2, 12, 50, 35],
];

export const calcAllPercent = champion => {
  const info = championInfo(champion);
  const allChampion = findAllChampion(findSynergy(champion));
  const levelWithPrice = splitWithPrice(allChampion);
  const cost = info.cost;
  let championList = allChampion.map(champ => {
    let filterChampion = findAllChampion(findSynergy(champ.name)).filter(
      element => {
        if (element.cost === cost) {
          return element;
        }
      },
    );
    return {name: champ.name, length: filterChampion.length};
  });

  const returnValue = [];
  let entirePercent = championList.map(element => {
    let percentWithLevel = rerollPercent.map(level => {
      return level[cost - 1] / element.length;
    });
    return {name: element.name, percent: percentWithLevel};
  });
  entirePercent.map(element => {
    console.log(element);
  });
  return returnValue;
};
