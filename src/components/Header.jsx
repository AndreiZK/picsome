import { Link } from "react-router-dom"
import { AppContext } from "../appContext"
import { useContext } from "react"

function Header() {
    const {cart} = useContext(AppContext)

    const emptyCart = "ri-shopping-cart-line ri-fw ri-2x"
    const filledCart = "ri-shopping-cart-fill ri-fw ri-2x"

    return (
        <header>    
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/cart'><i className={cart.length ? filledCart : emptyCart}></i></Link>
        </header>
    )
}

export default Header
