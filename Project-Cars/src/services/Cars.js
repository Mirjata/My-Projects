/* eslint-disable no-alert */
import axios from 'axios';

const apiUrl = 'http://localhost:8090/api/collections/cars/records';

export const getAllCars = async () => {
  try {
    const res = await axios.get(apiUrl);
    return res;
  } catch (err) {
    return err.message;
  }
};

export const getCarById = async id => {
  try {
    const res = await axios.get(`${apiUrl}/${id}`);
    return res;
  } catch (err) {
    return err.message;
  }
};

export const createNewCar = async data => {
  try {
    await axios.post(apiUrl, data);
    return 'Successfully added new car';
  } catch (err) {
    return err.message;
  }
};

export const updateCarById = async (id, data) => {
  try {
    await axios.patch(`${apiUrl}/${id}`, data);
    return 'Successfully updated new car';
  } catch (err) {
    return err.message;
  }
};

export const removeCarById = async id => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    return 'Successfully deleted car';
  } catch (err) {
    return err;
  }
};
