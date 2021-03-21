import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Item({item, index, arrayLength}) {

    const controls = useAnimation();
    controls.start( index => ({ 
        opacity: [0.1,1,0.1],
        scale: [1,2,1],
        transition: {
            duration: 0.5,
            delay: index * 0.2
            }
        })
    )
    const imgStyle = {
        margin: '30px',
    }

    const position = arrayLength - index;
    const delay = arrayLength * 0.1;

    return (    
        <div>
            <motion.img 
                src={item.image} 
                custom={index} 
                style={imgStyle} 
                animate={controls}
                onAnimationComplete={() => {
                    if (item.select) {
                        controls.start({
                            opacity: 1,
                            scale: 2,
                            transition: {
                                delay: delay
                            }
                        })
                    } 
                    
                }}
            />        
        </div>
    )   
}

export default Item;