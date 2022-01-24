export const colorList = (list, color1, color2) => {
  let color1ToNum = colorToDec(color1);
  let color2ToNum = colorToDec(color2);
  let factor = [];
  for (let i = 0; i < 3; i++) {
    let calc = (color2ToNum[i] - color1ToNum[i]) / list[list.length - 1];
    factor.push(calc);
  }
  let colorArray = list.map(element => {
    let returnColor = [];
    for (let i = 0; i < 3; i++) {
      returnColor[i] = colorToHex(color1ToNum[i] + factor[i] * element);
    }
    let returnString = '#' + returnColor[0] + returnColor[1] + returnColor[2];
    return returnString;
  });

  return colorArray;
};

export const colorToDec = color => {
  let hex = color.substr(1, color.length);
  let R = parseInt(hex.substr(0, 2), 16);
  let G = parseInt(hex.substr(2, 2), 16);
  let B = parseInt(hex.substr(4, 2), 16);
  return [R, G, B];
};

export const colorToHex = color => {
  let hex = Math.ceil(color).toString(16);
  if (hex.length === 1) {
    hex = '0' + hex;
  }
  return hex;
};
