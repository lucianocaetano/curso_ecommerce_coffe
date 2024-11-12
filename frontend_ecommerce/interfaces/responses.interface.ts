import { ICategory } from "./categories.interface";
import { IProduct } from "./products.interface";

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

export interface IResponseCategories {
  data: ICategory[];
  meta: Meta;
}

export interface IResponseProduct {
  data: IProduct[];
  meta: Meta
}
