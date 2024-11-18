//mesonary 
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from "./Image"

//component



function ImageBox({ images }) {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
        >
            <Masonry gutter="10px">
                {images.map((image) => {
                    return <Image key={image.id} image={image}/>
                })}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default ImageBox
