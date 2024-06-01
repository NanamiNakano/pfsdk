export interface BasicResponse {
    Msg?: string;
    Ok: boolean;
}
export interface QueryParams {
    limit?: number;
    offset?: number;
    filter?: string;
    search?: string;
    exact?: boolean;
    order?: string;
    sort?: string;
}
export interface Config {
    [key: string]: string;
}
