import { useContext, useState } from "react"
import { AppContext } from "../appContext"
import PropTypes from 'prop-types'
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const {toggleFavorite, addCartItem, deleteCartItem, cart} = useContext(AppContext)

    

    const [isHovered, ref] = useHover()   

    const heartIcon = () => {
        if (img.isFavorite) {
            return <i className={`ri-heart-fill favorite`} onClick={() => toggleFavorite(img.id)}></i>
        } else {
            return isHovered && <i className={`ri-heart-line favorite`} onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    const cartIcon = () => {
        if (cart.includes(img)) {
            return <i className="ri-add-circle-line cart" onClick={() => deleteCartItem(img)}></i>
        } else {
            return isHovered && <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>
        }
    }

    return (
        <div ref={ref} className={`${className} image-container`}>
            {heartIcon()}
            {cartIcon()}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image