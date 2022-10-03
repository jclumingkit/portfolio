const animateCol = (delay) => {
    const col = {
        hidden: { y: +100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeIn',
                delay: delay,
                type: 'spring',
                stiffness: 50
            }
        }
    }

    return col;
}

export default animateCol;