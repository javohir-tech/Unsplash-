//mesonary 
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "./Image"

//custom hooks
import { useGlobalContext } from "../Hooks/useGlobalContext"


function ImageBox({ images }) {

    const {likedImages} = useGlobalContext()

    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
        >
            <Masonry gutter="10px">
                {images.map((image) => {
                    return <Image key={image.id} image={image} added={likedImages.some((img)=>img.id == image.id)} />
                })}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default ImageBox
