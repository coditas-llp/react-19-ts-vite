import axios from 'axios';
import { BASE_URL, IBaseModelOptions } from 'models/useBaseModel';

export const getData = async (apiURL: string, options?: IBaseModelOptions) => {
  console.log('>> apiURL', apiURL);
  console.log('>> options', options);

  try {
    const response = await axios.get(`${BASE_URL}/${apiURL}`);
    if (options?.dataFormatter) {
      return options.dataFormatter(response.data);
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addData = async (apiURL: string, data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}/${apiURL}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const updateData = async (apiURL: string, data: any) => {
  try {
    const response = await axios.put(`${BASE_URL}/${apiURL}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteData = async (apiURL: string, data: any) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${apiURL}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
