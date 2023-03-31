import { useContext, useRef } from "react"
import { AppContext } from "../appContext"
import CartItem from "../components/CartItem"

function Cart() {

    const {cart, clearCart} = useContext(AppContext)
    const orderBtn = useRef(null)

    const cartItems = cart.map(item => (
        <CartItem key={item.id} item={item}/>
    ))


    function placeOrder(e) {
        e.target.textContent = 'Ordering...'
        setTimeout(() => {
            clearCart()
        }, 2000)
        
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItems}
            <p className="total-cost">Total: {`${(cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}`}</p>
            {cart.length ? <div className="order-button">
                <button ref={orderBtn} onClick={placeOrder}>Place Order</button>
            </div> : <p>You have no items in your cart</p>}
        </main>
    )
}

export default Cart