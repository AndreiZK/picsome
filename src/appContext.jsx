import { createContext, useState, useEffect } from "react"

const AppContext = createContext()

function Provider({children}) {

    const photosURL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    const [photos, setPhotos] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(photosURL)
                if (res.ok) {
                    const data = await res.json()
                    setPhotos(await data)
                } else {
                    throw new Error('failed to fetch data')
                }
            } catch(err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])

    function toggleFavorite(id) {
        setPhotos(prevPhotos => {
            return prevPhotos.map(photo => {
                if (photo.id === id) {
                    return {...photo, isFavorite: !photo.isFavorite}
                } else {
                    return photo
                }
            })
        })
    }

    function addCartItem(img) {
        setCart(prevCart => ([...prevCart, img]))
        console.log(cart)
    }

    function deleteCartItem(img) {
        setCart(prevCart => prevCart.filter(item => item !== img))
    }

    function clearCart() {
        setCart([])
    }

    return (
        <AppContext.Provider value={{photos, toggleFavorite, addCartItem, deleteCartItem, clearCart, cart}}>
            {children}
        </AppContext.Provider>
    )
}

export {Provider, AppContext}