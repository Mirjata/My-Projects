/* eslint-disable no-alert */
import _ from 'lodash';
import { make, colors, typeOfFuel, type, numberOfDoors } from 'enums/index';

import { createNewCar } from '../services/cars';

const createCar = async () => {
  let makeInput = prompt('Write Make');
  while (!make.includes(makeInput) && !_.isNil(makeInput)) {
    alert('Wrong make');
    makeInput = prompt('Write Make');
  }
  if (_.isNil(make)) return;

  let year = prompt('Year');
  if (!_.isNil(year)) {
    while (!/^[0-9]+$/.test(year) || year > 2022 || year < 1900) {
      alert('Incorrect year');
      year = prompt('Year');
    }
  }

  let fuelInput = prompt('Fuel');
  while (!typeOfFuel.includes(fuelInput) && !_.isNil(fuelInput)) {
    alert('Invalid Fuel');
    fuelInput = prompt('Fuel');
  }
  if (_.isNil(fuelInput));

  let colorInput = prompt('Color');
  while (!colors.includes(colorInput) && !_.isNil(colorInput)) {
    alert('Color');
    colorInput = prompt('Color');
  }
  if (_.isNil(colorInput));

  let categoryInput = prompt('category');
  while (!type.includes(categoryInput) && !_.isNil(categoryInput)) {
    alert('Invalid category');
    categoryInput = prompt('Category');
  }
  if (!_.isNil(categoryInput));

  let doorsInput = prompt('Number Of Doors');

  while (!numberOfDoors.includes(doorsInput) && !_.isNil(doorsInput)) {
    alert('Invalid input');
    doorsInput = prompt('Number Of Doors');
  }
  if (!_.isNil(doorsInput));

  const newCar = {
    year,
    colorInput,
    makeInput,
    doorsInput,
    fuelInput,
    categoryInput,
  };

  const res = await createNewCar(newCar);
  alert(res);
};

export default createCar;
