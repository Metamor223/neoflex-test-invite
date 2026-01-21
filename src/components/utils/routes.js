import {
    CART_ROUTE,
    CATALOG_ROUTE,
} from "./consts";

import CartPage from "../../pages/cart/CartPage";
import CatalogPage from "../../pages/catalog/CatalogPage";

export const publicRoutes =  [
    {
        path: CATALOG_ROUTE,
        Component: CatalogPage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    }
]