import { IGetIdsAction, IGetItemsAction } from './types.ts';


export const getIdsAction = (offset: number, limit: number): IGetIdsAction => {
    return {
        action: 'get_ids',
        params: {
            offset,
            limit,
        }
    };
};

export const getProductsAction = (ids: string[]): IGetItemsAction => ({
    action: 'get_items',
    params: { ids },
});
