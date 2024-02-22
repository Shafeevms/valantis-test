export interface IAuthStringParams {
    password: string;
    timestamp: string;
}

interface IFilterParams {
    price: number;
}

interface IGetIdsParams {
    offset: number;
    limit: number;
}

interface IGetItemsParams {
    ids: string[];
}

interface IGetFieldsParams {
    field?: string;
    offset?: number;
    limit?: number;
}

export interface IFilterAction {
    action: 'filter';
    params: IFilterParams;
}

export interface IGetIdsAction {
    action: 'get_ids';
    params: IGetIdsParams;
}

export interface IGetItemsAction {
    action: 'get_items';
    params: IGetItemsParams;
}

export interface IGetFieldsAction {
    action: 'get_fields';
    params: IGetFieldsParams;
}

export interface IAuthStringAction {
    action: string;
    params: IAuthStringParams;
}

export type TApiAction = IFilterAction
    | IGetIdsAction
    | IGetItemsAction
    | IGetFieldsAction
    | IAuthStringAction;

