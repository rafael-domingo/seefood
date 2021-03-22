import React from 'react';
import { motion } from 'framer-motion';

function Logo() {

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
        backgroundColor: 'black',
    }

    const pupilVariants = {
        show: {
            x: [-20, 0, 20, 0, 20],
            y: [-20, -40, -20, 40, 20],
            transition: {
                duration: 2,
                type: 'spring'
                
            }
        }
    }
    return (
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

export default Logo;