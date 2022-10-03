import { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import './styles.css'

export default function BackToTopButton() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500){
          setIsVisible(true)
        } 
        else if (scrolled <= 500){
          setIsVisible(false)
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', toggleVisible);

    }, [isVisible])

    return(
        <BsFillArrowUpSquareFill 
            className="back-to-top-btn 
                text-pink 
                bg-goldenYellow 
                rounded" 
            style={{ display: isVisible ? 'inline-block' : 'none' }}
        />
    )
}