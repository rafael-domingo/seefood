import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Image({ uploadedFile, show, setShow, setUploadedFile, labels }) {
    
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
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
                type: 'spring'
            }
        }
    }

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50px'
    }

    const imgDivStyle = {
        width: '100%',
        height: '80%',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
      
    const containerDiv = {
        position: 'relative',
        width: '80%',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '30px'
    }

    const buttonStyle = {
        position: 'absolute',
        height: '50px',
        width: '50px',
        top: '2%',
        right: '0%',
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
                exit="exit"
                >
                <div style={buttonStyle} onClick={() => {
                    setShow(!show)
                    setUploadedFile({})
                }
                }
                >X</div>
                <motion.div style={imgDivStyle}>
                <img style={imgStyle} src={uploadedFile.filePath} alt=""/>
                </motion.div>
            </motion.div>
            )
        }     
        </AnimatePresence>
    )
    
}

export default Image;