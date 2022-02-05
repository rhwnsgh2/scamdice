import {splitWithCost} from './calPercent';
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
  const cost = info.cost;
  let championList = allChampion.map(champ => {
    let filterChampion = findAllChampion(findSynergy(champ.name)).filter(
      element => {
        if (element.cost === cost) {
          return element;
        }
      },
    );
    return {champ, length: filterChampion.length};
  });

  let entirePercent = championList.map(element => {
    let percentWithLevel = rerollPercent.map(level => {
      return (level[cost - 1] / element.length).toFixed(1);
    });
    return {champion: element.champ, percent: percentWithLevel};
  });
  let result = entirePercent.sort((a, b) => {
    let sumA = a.percent.reduce((acc, cur) => Number(acc) + Number(cur));
    let sumB = b.percent.reduce((acc, cur) => Number(acc) + Number(cur));
    return sumB - sumA;
  });
  return result;
};

export const calcAllPercentOnChampion = champion => {
  const info = championInfo(champion);
  const allChampion = findAllChampion(findSynergy(champion));
  const cost = info.cost;
  let championList = allChampion.map(champ => {
    let filterChampion = allChampion.filter(element => {
      if (element.cost === champ.cost) {
        return element;
      }
    });
    return {champ, length: filterChampion.length};
  });
  let entirePercent = championList.map(element => {
    let percentWithLevel = rerollPercent.map(level => {
      return (level[element.champ.cost - 1] / element.length).toFixed(1);
    });
    return {champion: element.champ, percent: percentWithLevel};
  });
  let result = entirePercent.sort((a, b) => {
    let sumA = a.champion.cost;
    let sumB = b.champion.cost;
    return sumB - sumA;
  });
  return result;
};
