import {mainData} from '../json/mainJson';
export const findSynergy = champion => {
  let obj = mainData.find(element => {
    if (element.name === champion) {
      return true;
    }
  });
  console.log(obj.synergy);
  return obj.synergy;
};

export const findChampion = synergy => {
  let obj = mainData.filter(element => {
    if (element.synergy.includes(synergy)) {
      return element;
    }
  });
  console.log(obj);
  return obj;
};

export const findAllChampion = synergy => {
  let obj = synergy.map(element => {
    return findChampion(element);
  });
  obj = obj.flat();
  const uniqObj = obj.filter((element, index) => {
    return obj.indexOf(element) === index;
  });
  return uniqObj;
};
