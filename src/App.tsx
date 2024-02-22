import { useEffect, useState } from 'react';
import { fetchData } from './api';
import { Box, Container, Grid, TextField } from '@mui/material';
import { removeDuplicatesById } from './api/helper.ts';
import { getIdsAction, getProductsAction } from './api/actions.ts';
import ItemCard from './components/ItemCard.tsx';
import Pagination from './components/Pagination.tsx';


export interface IProductItem {
    id: string,
    brand: string | null,
    price: number,
    product: string,
}

const App = () => {
    const [items, setItems] = useState<IProductItem[]>([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const limit = 50;

    useEffect(() => {
        (async () => {
            // TODO сделать try catch
            setIsLoading(true);
            const ids = await fetchData(getIdsAction(offset, limit));
            const products = await fetchData(getProductsAction(ids.result));
            setItems(removeDuplicatesById(products.result));
            setIsLoading(false);
        })();
    }, [offset]);


    return (
        <Container>
            <TextField
                label='filter by...'
                onChange={() => {
                }}
            />
            <Box mt={2} mb={3}>
                <Grid container spacing={2}>
                    {items.map((item) => (
                        <ItemCard key={item.id} {...item}/>
                    ))}
                </Grid>
            </Box>
            <Box display='flex' justifyContent='center'>
                <Pagination
                    setOffset={setOffset}
                    offset={offset}
                    limit={limit}
                    isLoading={isLoading}
                />
            </Box>
        </Container>
    );
};

export default App;

// TODO skeleton
// TODO если ошибка - нужно еще раз сделать запрос
// TODO поиск по...
// TODO README.MD
// TODO
// TODO рефакт, порядок
// TODO .env??
