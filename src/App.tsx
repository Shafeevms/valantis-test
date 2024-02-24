import { useEffect, useState } from 'react';
import { fetchData } from './api';
import { Container } from '@mui/material';
import { getFieldsAction } from './api/actions.ts';
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

// TODO README.MD
// TODO рефакт, порядок
// TODO .env??
// TODO тесты?
