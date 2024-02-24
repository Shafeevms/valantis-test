export interface IAuthStringParams {
    password: string,
    timestamp: string,
}

export interface IFilterParams {
    [key: string]: string | number
}

interface IGetIdsParams {
    offset: number,
    limit: number,
}

interface IGetItemsParams {
    ids: string[],
}


export interface IGetFilterAction {
    action: 'filter',
    params: IFilterParams,
}

export interface IGetIdsAction {
    action: 'get_ids',
    params: IGetIdsParams,
}

export interface IGetItemsAction {
    action: 'get_items',
    params: IGetItemsParams,
}

export interface IGetFieldsAction {
    action: 'get_fields',
    params?: { field: string },
}


export interface IAuthStringAction {
    action: string,
    params: IAuthStringParams,
}

export type TApiAction = IGetFilterAction
    | IGetIdsAction
    | IGetItemsAction
    | IGetFieldsAction
    | IAuthStringAction;

