import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Logo({ showImage }) {
    const [mobile, setMobile] = React.useState(window.innerWidth < 1500)

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px'
    }

    const eyeStyle = {
        margin: '10px',
        height: '200px',
        width: '120px',
        borderRadius: '50%',
        border: '5px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const pupilStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'white',
    }

    const pupilVariants = {
        show: {
            opacity: 1,
            x: [-20, 0, 20, 0, 20],
            y: [-20, -40, -20, 40, 20],
            transition: {
                duration: 2,
                type: 'spring'
                
            }
        },
        hidden: {
            opacity: 0
        }
    }
    return (
        <AnimatePresence>
            {
                !mobile && (
                    <div
                    style={containerStyle}
                >
                    <div
                        style={eyeStyle}              
                    >
                        <motion.div
                            style={pupilStyle}
                            variants={pupilVariants}
                            animate="show"
                        >
    
                        </motion.div>
                    </div>
                    <div
                        style={eyeStyle}              
                    >
                        <motion.div
                            style={pupilStyle}
                            variants={pupilVariants}
                            animate="show"
                        >
    
                        </motion.div>
                    </div>
                </div>
                )
            }
          
        </AnimatePresence>
       
    )
}

export default Logo;