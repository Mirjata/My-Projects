/* eslint-disable no-alert */
import _ from 'lodash';
import { updateCarById } from 'services/cars';
import { make, colors, typeOfFuel, type, numberOfDoors } from 'enums/index';

const updateCar = async () => {
  let id = prompt('ID');

  while (!_.isNil(id) && id.length < 15 && id.length > 15) {
    alert('Incorrect ID');
    id = prompt('ID');
  }
  if (_.isNil(id)) return;

  let makeInput = prompt('Write Make');
  while (!make.includes(makeInput) && !_.isNil(makeInput)) {
    alert('Wrong make');
    makeInput = prompt('Write Make');
  }
  if (_.isNil(make)) return;

  let year = prompt('Year');
  while (!_.isNil(year) && !_.isNaN(year) && year > 2022 && year < 1900) {
    alert('Incorrect year');
    year = prompt('Year');
  }
  if (_.isNil(year)) return;

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

  const updates = {
    year,
    colorInput,
    makeInput,
    doorsInput,
    fuelInput,
    categoryInput,
  };
  const res = await updateCarById(id, updates);
  alert(res);
};

export default updateCar;
