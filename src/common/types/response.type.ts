
export interface IResponse<T> {
    statusCode: 200 | 500;
    message: T;
}