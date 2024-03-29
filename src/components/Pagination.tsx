import { Box, Button } from '@mui/material';


interface IPagination {
    setOffset: (offset: number) => void,
    offset: number,
    limit: number,
    isLoading: boolean,
};

const Pagination = ({ setOffset, offset, limit, isLoading }: IPagination) => {
    const handleNextPage = () => {
        setOffset(offset + limit);
    };

    const handlePrevPage = () => {
        if (offset >= limit) {
            setOffset(offset - limit);
        }
    };
    return (
        <Box display='flex' justifyContent='center'>
            <Button onClick={handlePrevPage} disabled={offset === 0 || isLoading}>
                Previous Page
            </Button>
            <Button onClick={handleNextPage} disabled={isLoading}>Next Page</Button>
        </Box>
    );
};

export default Pagination;
