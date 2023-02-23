/* eslint-disable no-alert */
import _ from 'lodash';
import { removeCarById } from '../services/cars';

const removeCar = async () => {
  let id = prompt('ID');
  while (!_.isNil(id) && id.length < 15 && id.length > 15) {
    alert('Incorrect ID');
    id = prompt('ID');
  }
  if (_.isNil(id)) return;

  const res = await removeCarById(id);
  alert(res);
};

export default removeCar;
