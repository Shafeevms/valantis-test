import dayjs from 'dayjs';
import CryptoJS from 'crypto-js';
import { IProductItem } from '../App.tsx';


const getCurrentTimeStamp = () => dayjs().format('YYYYMMDD');

export const setXAuthHash = () => {
    const password = import.meta.env.VITE_PASSWORD;
    const timeStamp = getCurrentTimeStamp();
    const authString = `${password}_${timeStamp}`;
    return CryptoJS.MD5(authString).toString();
};

// TODO эта функции ниже не относятся к api:
export const removeDuplicatesById = (originalArray: IProductItem[]) => {
    const uniqueIds = new Set();
    return originalArray.filter(item => {
        const isUnique = !uniqueIds.has(item.id);
        uniqueIds.add(item.id);
        return isUnique;
    });
};

