import useCardList from '../hooks/useCardList.tsx';

import { Box, Grid } from '@mui/material';
import ItemCard from './ItemCard.tsx';
import LoadingCards from './LoadingCards.tsx';
import Pagination from './Pagination.tsx';


interface ICardListProps {
    filterParams: { [key: string]: string | number } | null;
}


const CardList = ({ filterParams }: ICardListProps) => {

    const {
        isLoading,
        memoizedItems,
        setOffset,
        offset,
        limit,
    } = useCardList(filterParams);

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
