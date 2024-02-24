import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';


const LoadingCards = () => {
    return (
        <Box mt={2} mb={3}>
            <Grid container spacing={2}>
                {Array.from(new Array(12)).map((_, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ minHeight: 250 }}>
                            <CardContent>
                                <Skeleton variant='text' sx={{ marginBottom: '10px' }}/>
                                <Skeleton variant='rectangular' height={40} sx={{ marginBottom: '10px' }}/>
                                <Skeleton variant='rectangular' height={40} sx={{ marginBottom: '10px' }}/>
                                <Skeleton variant='rectangular' height={40} sx={{ marginBottom: '10px' }}/>
                                <Skeleton variant='rectangular' height={40}/>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LoadingCards;
