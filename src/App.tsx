import { useEffect, useState } from 'react';
import { fetchData } from './api';
import { getFieldsAction } from './api/actions.ts';

import { Container } from '@mui/material';
import CardList from './components/CardList.tsx';
import Header from './components/Header.tsx';


export interface IProductItem {
    id: string,
    brand: string | null,
    price: number,
    product: string,
}

const App = () => {
    const [options, setOptions] = useState(null);
    const [filterParams, setFilterParams] = useState<{ [key: string]: string | number } | null>(null);

    const handleFilterParams = (field: string, text: string) => {
        if (field === 'default') {
            setFilterParams(null);
            return;
        }
        setFilterParams({ [field]: field === 'price' ? +text : text });
    };


    useEffect(() => {
        (async () => {
            const fields = await fetchData(getFieldsAction());
            setOptions(fields.result);
        })();
    }, []);

    return (
        <Container>
            <Header options={options} onClick={handleFilterParams}/>
            <CardList filterParams={filterParams}/>
        </Container>
    );
};

export default App;
