export const uniqueArray = list => {
  let ret = list.filter((item, index) => list.indexOf(item) === index);
  return ret;
};

export const makeNormalArray = list => {
  return list.reduce((acc, cur) => {
    return acc.concat(cur);
  });
};
export const sortArray = list => {
  return list.sort((a, b) => a - b);
};
