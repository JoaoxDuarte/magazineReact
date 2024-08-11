import { useState, useContext, useEffect } from "react";
import { CartContext, getAmountOfItemInCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserButtons = () => {
    const [amountOfItems, setAmountOfItems] = useState(0);
    const { toggleCartOpen, cartItems } = useContext(CartContext);

    useEffect (() => {
        setAmountOfItems(getAmountOfItemInCart(cartItems))
     }, [cartItems]);

    return (
        <div>
            <button className="px-2 relative" onClick={toggleCartOpen}>
                <FontAwesomeIcon icon={faCartShopping} />
                {!!amountOfItems && (<div id='cart-amount' className="absolute
                inline-flex items-center justify-center w-6 h-6
                 font-bold text-white bg-red-500 border-2
                 border-white rounded-full -top-2 -right-2">{amountOfItems}
                </div>
                )}
            </button>


            <Link to="/history">
                <FontAwesomeIcon className="px-2" icon={faUser} />
            </Link>
        </div> //parte do boneco onde vai para pag de compras
    );
};

/*className="absolute" = posição fixa a partiir de um referencial,
sendo: -top-2 -right-2*/
/* <button className="px-2 relative" onClick={() => 
    cartInfo.setIsCartOpen(true)}> = abre o cart*/
//Atualização tem relação com state
export default UserButtons;