import { setXAuthHash } from './helper.ts';
import { TApiAction } from './types.ts';


const API_URL = import.meta.env.VITE_URL;

export const fetchData = async (action: TApiAction, tryCounter = 2): Promise<any | null> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth': `${setXAuthHash()}`,
            },
            body: JSON.stringify(action)
        });

        if (!response.ok) {
            if (tryCounter > 0) {
                console.log(`Повторная попытка. Осталось попыток: ${tryCounter}`);
                return fetchData(action, tryCounter - 1);
            } else {
                console.error(`ОШИБКА ${response.status}`);
                return null;
            }
        }

        return await response.json();

    } catch (error) {
        console.error(error);
    }
};

