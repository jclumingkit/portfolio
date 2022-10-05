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

export const animateTextParent = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
}

export const animateTextChild = {
    hidden: {
        opacity: 0,
        y: 10
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            ease: 'easeIn'
        }
    }
}

export const animateSubtitle = {
    hover: {
        scale: 0.9,
        transition: {
            type: 'spring'
        }
    }
}