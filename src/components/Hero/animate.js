const animateDiv = (delay) => {
    const moduleDiv = {
        hidden: { x: -100, opacity: 0 },
        show: {
            x: 0,
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

    return moduleDiv;
}

export default animateDiv;