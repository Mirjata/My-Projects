import { getAllCars } from '../services/cars';

const getAll = async () => {
  const res = await getAllCars();
  alert(JSON.stringify(res));
};

export default getAll;
