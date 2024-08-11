import { createContext } from "react";

export const CartContext = createContext(null);

//FUCTION PARA CALCULAR A QTD NO CARRINHO/CART
export const getAmountOfItemInCart = (cartItemsObj) => {
    let amount = 0;
    for(const productId in cartItemsObj) {
        amount += cartItemsObj[productId];
    }
return amount;
}