import { IGetFilterAction, IGetFieldsAction, IGetIdsAction, IGetItemsAction } from './types.ts';


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


export const getFieldsAction = (): IGetFieldsAction => ({
    action: 'get_fields',
});

export const getFilteredIdsAction = (filterParams: { [key: string]: string | number }): IGetFilterAction => ({
    action: 'filter',
    params: { ...filterParams , limit: 50},
});
