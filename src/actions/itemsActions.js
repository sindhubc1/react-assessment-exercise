import {
    Filter_PRODUCTS_BY_PRICE,
  } from "./action-types/cart-actions";
  // Redux actions for filter products by price selected from price filter slider
  
  export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
      type: Filter_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };
  