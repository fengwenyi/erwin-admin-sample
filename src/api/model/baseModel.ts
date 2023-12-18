export interface BasicPageParams {
  page: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  items: T[];
  total: number;
}

export interface PageParams {
  current: number;
  pageSize: number;
}

export interface PageDto {
  current: number;
  pageSize: number;
}

export interface ListTemplate<T> {
  content: T[];
}

export interface PageTemplate<T> extends ListTemplate<T> {
  current: number;
  pageSize: number;
  totalRow: number;
  totalPage: number;
}
