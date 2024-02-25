export type LayoutProps = {
  children: any;
};

export type MenuItem = {
  category: string;
  name: string;
  options?: string;
  price: number | string;
  cost: number | string;
  stock: number | string;
  id?: string;
};

export enum ROUTE_QUERY_PARAMS {
  ITEM_ID = "id",
}
