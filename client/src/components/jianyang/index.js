import React from 'react';
import Jian from '../../assets/jianyang.png';
import { AnimatePresence, motion } from 'framer-motion';

function JianYang() {
    const divStyle = {
        borderRadius: '30px',
        height: '5em',
        width: '5em',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const imgStyle = {
        borderRadius: '30px',
        width: '10em',
        height: '10em'
    }

    const variants = {
        hidden: {
            opacity: 0,
            y: '100vh'
        },
        show: {
            opacity: 1,
            y: '0'
        },
        hover: {
            scale: 2
        }
    }

    return (
        <motion.div 
            style={divStyle}
            variants={variants}
            initial="hidden"
            animate="show"
            whileHover="hover"
            whileTap="hover"
        >
            <img src={Jian} style={imgStyle}/>
        </motion.div>
      
    )
}

export default JianYang;