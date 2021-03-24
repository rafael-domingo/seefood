import React from 'react';
import Jian from '../../assets/jianyang.png';
import { AnimatePresence, motion } from 'framer-motion';

function JianYang({ setHotDogMode, hotDogMode }) {
    const divStyle = {
        borderRadius: '30px',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }

    const imgStyle = {
        borderRadius: '30px',
        width: '10em',
        height: '10em',
    }

    const imgDivStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

    const textStyle = {
        color: 'white',
        fontSize: '2em',
        width: '100%',
        textAlign: 'center'
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
            onClick={() => {
                console.log(`Toggle Hot Dog Mode: ${hotDogMode}`)
                setHotDogMode(!hotDogMode)}
            }
        >
            <div style={imgDivStyle}>
                <img src={Jian} style={imgStyle}/>
            </div>

            <div style={textStyle}>
                <p>{`Hot Dog mode: ${hotDogMode}`}</p>
            </div>
            
        </motion.div>
      
    )
}

export default JianYang;