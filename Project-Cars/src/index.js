/* eslint-disable no-alert */
import getAllCars from 'components/GetAll';
import getCar from 'components/GetCar';
import createCar from 'components/CreateCar';
import updateCar from 'components/UpdateCar';
import removeCar from 'components/RemoveCar';

window.addEventListener('load', () => {
  document.getElementById('get-all-btn').onclick = () => getAllCars();
  document.getElementById('get-btn').onclick = () => getCar();
  document.getElementById('create-btn').onclick = () => createCar();
  document.getElementById('update-btn').onclick = () => updateCar();
  document.getElementById('remove-btn').onclick = () => removeCar();
});
