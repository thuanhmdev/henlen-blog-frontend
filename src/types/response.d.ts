export type TResponse<T> = {
  message: string | any;
  statusCode: number;
  error: string | null;
  data: T;
};
