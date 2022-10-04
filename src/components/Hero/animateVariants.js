export const animateParent = {
    hidden: { x: -100, opacity: 0 },
    show: { 
        x: 0, 
        opacity: 1, 
        transition: {
            staggerChildren: 0.5
    }}
}

export const animateChild = {
    hidden: { x: -100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: 'easeIn',
            type: 'spring',
            stiffness: 50
        }
    }
}