import {
    CART_ROUTE,
    CATALOG_ROUTE,
    PAYMENT_ROUTE
} from "./consts";

import CartPage from "../../pages/cart/CartPage";
import CatalogPage from "../../pages/catalog/CatalogPage";
import PaymentPage from "../../pages/payment/paymentPage";

export const publicRoutes =  [
    {
        path: CATALOG_ROUTE,
        Component: CatalogPage
    },
    {
        path: CART_ROUTE,
        Component: CartPage
    },
    {
        path: PAYMENT_ROUTE,
        Component: PaymentPage
    }
]