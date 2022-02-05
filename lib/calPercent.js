export const splitWithCost = list => {
  let cost1 = [],
    cost2 = [],
    cost3 = [],
    cost4 = [],
    cost5 = [];
  list.map(element => {
    switch (element.cost) {
      case 1:
        cost1.push(element);
        break;
      case 2:
        cost2.push(element);
        break;
      case 3:
        cost3.push(element);
        break;
      case 4:
        cost4.push(element);
        break;
      case 5:
        cost5.push(element);
        break;
    }
  });
  return {cost1, cost2, cost3, cost4, cost5};
};
