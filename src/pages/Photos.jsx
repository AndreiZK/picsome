import getClass from "../utils/getClass"
import Image from "../components/Image"
import { AppContext } from "../appContext"
import { useContext } from "react"

function Photos() {

    const allPhotos = useContext(AppContext).photos
    
    const imagesArray = allPhotos.map((photo, i) => {
        return (<Image key={photo.id} img={photo} className={getClass(i)} />)
    })
    return (
        <main className="photos">
            {imagesArray}
        </main>
    )
}

export default Photos