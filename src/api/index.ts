import { setXAuthHash } from './helper.ts';
import { TApiAction } from './types.ts';


const API_URL = import.meta.env.VITE_URL;

export const fetchData = async (action: TApiAction) => {
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
            console.error(`ОШИБКА ${response.status}`);
            return;
        }

        return await response.json();

    } catch (error) {
        console.error(error);
    }
};
