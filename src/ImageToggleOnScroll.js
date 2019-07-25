import React, { useRef, useEffect, useState } from 'react'

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", scrollHander);
        // setInView(isInView());
        // setIsLoading(false);
        return(()=> {
            window.removeEventListener("scroll", scrollHander);
        });
    });

    const [inView, setInView] = useState(false);

    const isInView = () => {
        if(imageRef.current){
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
    }

    const scrollHander = () => {
        setInView(() =>{
            return isInView();
        })
    }

    return (
        <img
            src={ inView? secondaryImg : primaryImg} 
            alt="" ref={imageRef} width="200" height="200" />
    )
}

export default ImageToggleOnScroll;
