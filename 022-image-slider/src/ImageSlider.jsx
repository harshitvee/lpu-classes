import { useState } from "react";
const imageUrls = [
    "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
];
function ImageSlider() {
    const [imageIndex, setImageIndex] = useState(0);
    function handlePrevious() {
        setImageIndex((prevIndex) => {
            if (prevIndex === 0) {
                return imageUrls.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }
    function handleNext() {
        setImageIndex((prevIndex) => {
            if (prevIndex === imageUrls.length - 1) {
                return 0;
            } else {
                return prevIndex + 1;
            }
        });
    }
    return (
        <div className="image-slider">
            <button onClick={handlePrevious}>Previous</button>
            <div className="image-container">
                <img src={imageUrls[imageIndex]} alt="" />
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}

export default ImageSlider;
