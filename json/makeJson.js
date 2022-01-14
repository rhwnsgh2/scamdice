import {champion} from './champion';
import championJson from './champion.json';
import {synergy} from './synergy';
const data = Object(championJson.data);

export const makeJsonData = () => {
  console.log(
    champion.map(item => {
      let img = null;
      for (let key in data) {
        if (data[key].name === item.name) {
          img = './champion/' + data[key].image.full;
        }
      }
      let synergyList = synergy.filter(element =>
        element.list.includes(item.name),
      );
      return {
        name: item.name,
        cost: item.cost,
        img: img,
        synergy: synergyList.map(element => element.name),
      };
    }),
  );
};
