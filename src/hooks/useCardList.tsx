import { useEffect, useMemo, useState } from 'react';
import { IProductItem } from '../App.tsx';
import { fetchData } from '../api';
import { getFilteredIdsAction, getIdsAction, getProductsAction } from '../api/actions.ts';
import { removeDuplicatesById } from '../api/helper.ts';

type TUseCardListProps = { [key: string]: string | number } | null;

const useCardList = (filterParams: TUseCardListProps) => {
    const [items, setItems] = useState<IProductItem[]>([]);
    const [filteredItems, setFilteredItems] = useState<IProductItem[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 50;


    useEffect(() => {
        (async () => {
            if (filterParams) {
                return;
            }
            setIsLoading(true);
            const ids = await fetchData(getIdsAction(offset, limit));
            const products = await fetchData(getProductsAction(ids.result));
            setItems(products.result);
            setIsLoading(false);
        })();
    }, [offset, limit, filterParams]);

    useEffect(() => {
        if (filteredItems) {
            setFilteredItems(null);
            setOffset(0);
        }
    }, [filterParams])

    useEffect(() => {
        (async () => {
            if (!filterParams) {
                return;
            }
            setIsLoading(true);
            if (!filteredItems) {
                const ids = await fetchData(getFilteredIdsAction(filterParams));
                const products = await fetchData(getProductsAction(ids.result));
                setFilteredItems(products.result);
            }
            filteredItems && setItems(filteredItems.slice(offset, offset + limit));
            setIsLoading(false);
        })();
    }, [filterParams, offset, limit, filteredItems]);


    const memoizedItems = useMemo(() => removeDuplicatesById(items), [items]);
    return {
        isLoading,
        memoizedItems,
        setOffset,
        offset,
        limit,
    }
};

export default useCardList;
