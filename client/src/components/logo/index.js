import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Logo({ showImage }) {
    const [mobile, setMobile] = React.useState(window.innerWidth < 1500)

    const titleStyle = {
        fontSize: '1.5em',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'helvetica'
    }

    const mobileTitleStyle = {
        fontSize: '1.5em',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'helvetica'
    }
    
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px',
        // width: '100%'
    }

    const eyeStyle = {
        margin: '10px',
        height: '3em',
        width: '3em',
        borderRadius: '50%',
        border: '2px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const pupilStyle = {
        width: '1.5em',
        height: '1.5em',
        borderRadius: '50%',
        backgroundColor: 'white',
    }

    const pupilVariants = {
        show: {
            opacity: 1,
            x: [-10, 0, 10, 0, 10],
            y: [-10, -20, -10, 20, 10],
            transition: {
                duration: 2,
                type: 'spring'
                
            }
        },
        hidden: {
            opacity: 0
        }
    }

    const mobileVariants = {
        hidden: {
            opacity: 1,
        },
        show: {
            opacity: 1,
        }
    }

    const variants = {
        hidden: {
            opacity: 1,
            scale: 1
        },
        show: {
            opacity: 1,
            scale: 2
        }
    }
    if (mobile)  {
        return (
            <AnimatePresence exitBeforeEnter>
                {
                    !showImage && (
                        <motion.div 
                        style={containerStyle}
                        variants={mobileVariants}
                        animate="show"
                        exit="hidden"
                        initial="hidden"
                    >
                            <h1 style={mobileTitleStyle}>SEE F</h1>
                            <div style={eyeStyle}>
                            <motion.div
                                style={pupilStyle}
                                variants={pupilVariants}
                                animate="show"
                            >
                            </motion.div>
                        </div>
                        <div style={eyeStyle}>
                            <motion.div
                                style={pupilStyle}
                                variants={pupilVariants}
                                animate="show"
                            >
                            </motion.div>
                        </div>
                        <h1 style={mobileTitleStyle}>D</h1>
                    </motion.div>
                    )
                }
              
            </AnimatePresence>
           
        )
    } else {
        return (
            <AnimatePresence exitBeforeEnter>
                {
                    true && (
                        <motion.div 
                        style={containerStyle}
                        variants={variants}
                        animate="show"
                        exit="hidden"
                        initial="hidden"
                    >
                            <h1 style={titleStyle}>SEE F</h1>
                            <div style={eyeStyle}>
                            <motion.div
                                style={pupilStyle}
                                variants={pupilVariants}
                                animate="show"
                            >
                            </motion.div>
                        </div>
                        <div style={eyeStyle}>
                            <motion.div
                                style={pupilStyle}
                                variants={pupilVariants}
                                animate="show"
                            >
                            </motion.div>
                        </div>
                        <h1 style={mobileTitleStyle}>D</h1>
                    </motion.div>
                    )
                }
              
            </AnimatePresence>
           
        )
    }
    
}

export default Logo;