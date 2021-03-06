import {mainData} from '../json/mainJson';
export const findSynergy = champion => {
  let obj = mainData.find(element => {
    if (element.name === champion) {
      return true;
    }
  });

  return obj.synergy;
};

export const findChampion = synergy => {
  let obj = mainData.filter(element => {
    if (element.synergy.includes(synergy)) {
      return element;
    }
  });
  return obj;
};

export const championInfo = champion => {
  let obj = mainData.find(element => {
    if (element.name === champion) {
      return element;
    }
  });
  return obj;
};

export const findAllChampion = synergy => {
  if (synergy?.length != 1) {
    let obj = synergy.map(element => {
      return findChampion(element);
    });
    obj = obj.flat();
    const uniqObj = obj.filter((element, index) => {
      return obj.indexOf(element) === index;
    });
    return uniqObj;
  } else {
    let obj = findChampion(synergy);
    return obj;
  }
};
