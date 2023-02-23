/* eslint-disable no-alert */
import _ from 'lodash';
import { getCarById } from '../services/cars';

const getCar = async () => {
  let id = prompt('ID');
  while (!_.isNil(id) && id.length < 15 && id.length > 15) {
    alert('Incorrect ID');
    id = prompt('ID');
  }
  if (_.isNil(id)) return;
  const res = await getCarById(id);
  alert(JSON.stringify(res));
};

export default getCar;
