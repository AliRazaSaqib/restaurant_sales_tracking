export interface LayoutProps {
  children: any;
}

export interface MenuItem {
  category: string;
  name: string;
  options?: string;
  price: number | string;
  cost: number | string;
  stock: number | string;
  id?: string;
}

export enum ROUTE_QUERY_PARAMS {
  ITEM_ID = "id",
}
