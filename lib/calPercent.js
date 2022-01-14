export const splitWithPrice = list => {
  let lv1 = [],
    lv2 = [],
    lv3 = [],
    lv4 = [],
    lv5 = [];
  list.map(element => {
    switch (element.cost) {
      case 1:
        lv1.push(element);
        break;
      case 2:
        lv2.push(element);
        break;
      case 3:
        lv3.push(element);
        break;
      case 4:
        lv4.push(element);
        break;
      case 5:
        lv5.push(element);
        break;
    }
  });
  return {lv1, lv2, lv3, lv4, lv5};
};
