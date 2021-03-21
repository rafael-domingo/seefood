import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Image({ uploadedFile, show, setShow, setShowFood }) {
    
    const backdrop = {
        visible: { 
            opacity: 1,
            scale: 1,
        transition: {
            duration: 1,
            delay: 1,
            type: 'spring'
        } },
        hidden: { opacity: 0,
            scale: 0,
        transition: {
            duration: 1,
            type: 'spring'
        } },
    }

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50px'
    }

    const imgDivStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
      
    const containerDiv = {
        position: 'fixed',
        top: 100, 
        width: '80%',
        height: '50vh',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px'
    }

    const buttonStyle = {
        position: 'absolute',
        height: '50px',
        width: '50px',
        top: 20,
        right: 20,
        color: 'white',
        rotate: '45',
        borderRadius: '50%',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }

    return (
        <AnimatePresence exitBeforeEnter>
        { show && (
            <motion.div 
                style={containerDiv}
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
                >
                <motion.div style={imgDivStyle}>
                <div style={buttonStyle} onClick={() => {
                    setShow(!show)
                    setShowFood(false)
                }
                }
                >X</div>

                <img style={imgStyle} src={uploadedFile.filePath} alt=""/>
                </motion.div>
            </motion.div>
            )
        }     
        </AnimatePresence>
    )
    
}

export default Image;