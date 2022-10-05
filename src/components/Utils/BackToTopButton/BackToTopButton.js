import './styles.css';

import { useEffect, useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';

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

    const handleScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {

        window.addEventListener('scroll', toggleVisible);

    }, [isVisible])

    return(
        <BsFillArrowUpSquareFill 
            className="back-to-top-btn 
                text-darkBlue 
                bg-neonBlue 
                rounded" 
            style={{ display: isVisible ? 'inline-block' : 'none' }}
            onClick={() => handleScrollToTop()}
        />
    )
}