import { Card, CardContent, Grid, Typography } from '@mui/material';
import { IProductItem } from '../App.tsx';


const ItemCard = ({ id, product, price, brand}: IProductItem) => {
    return (
        <Grid item key={id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minHeight: 250 }}>
                <CardContent>
                    <Typography variant='caption'>ID: {id}</Typography>
                    <Typography variant='h6'>{product}</Typography>
                    <Typography variant='body1'>Brand: {brand || 'N/A'}</Typography>
                    <Typography variant='body1'>Price: ${price.toFixed(2)}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ItemCard;
