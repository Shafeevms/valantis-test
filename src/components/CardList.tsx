import { Box, Grid } from '@mui/material';
import ItemCard from './ItemCard.tsx';
import { IProductItem } from '../App.tsx';
import { useEffect, useMemo, useState } from 'react';
import { removeDuplicatesById } from '../api/helper.ts';
import { fetchData } from '../api';
import { getFilteredIdsAction, getIdsAction, getProductsAction } from '../api/actions.ts';
import LoadingCards from './LoadingCards.tsx';
import Pagination from './Pagination.tsx';
import { TApiAction } from '../api/types.ts';


interface ICardListProps {
    filterParams: { [key: string]: string | number } | null;
}


const CardList = ({ filterParams }: ICardListProps) => {
    const [items, setItems] = useState<IProductItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 50;

    const fetchDataAndSetItems = async (action: TApiAction) => {
        setIsLoading(true);
        const ids = await fetchData(action);
        const products = await fetchData(getProductsAction(ids.result));
        setItems(products.result);
        setIsLoading(false);
    };

    useEffect(() => {
        (async () => {
            if (filterParams) {
                return;
            }
            await fetchDataAndSetItems(getIdsAction(offset, limit));
        })();
    }, [offset, limit, filterParams]);

    useEffect(() => {
        (async () => {
            if (!filterParams) {
                return;
            }
            await fetchDataAndSetItems(getFilteredIdsAction(filterParams));
        })();
    }, [filterParams]);


    const memoizedItems = useMemo(() => removeDuplicatesById(items), [items]);

    return (
        <>
            {isLoading
                ? <LoadingCards/>
                : <Box mt={2} mb={3}>
                    <Grid container spacing={2}>
                        {memoizedItems.map((item) => (
                            <ItemCard key={item.id} {...item}/>
                        ))}
                    </Grid>
                </Box>
            }
            <Pagination
                setOffset={setOffset}
                offset={offset}
                limit={limit}
                isLoading={isLoading}
            />
        </>
    );
};

export default CardList;
