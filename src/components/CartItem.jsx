import { AppContext } from "../appContext"
import { useContext, useState } from "react"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"


export default function CartItem({item}) {

    const {deleteCartItem} = useContext(AppContext)

    const [isHovered, ref] = useHover()

    return (
        <div className="cart-item">
            <i ref={ref} className={`ri-delete-bin-${isHovered ? 'fill' : 'line'}`} onClick={() => deleteCartItem(item)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    img: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}