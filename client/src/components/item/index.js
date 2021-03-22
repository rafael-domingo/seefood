import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import {LabelCheck} from '../../util/LabelCheck';

function Item({item, index, arrayLength, labels}) {
    const [match, setMatch] = React.useState();

 
    // check if there is a match
    React.useEffect(() => {
        LabelCheck.compare(item, labels).then(match => {
            if (match.length > 0) {
                setMatch(true)
            }
        })
    })

    // Animations
    const controls = useAnimation();
    controls.start( index => ({ 
        opacity: [0.1,1,0.1],
        scale: [1,2,1],
        transition: {
            duration: 0.5,
            delay: index * 0.5
            }
        })
    )
    const imgStyle = {
        margin: '30px',
    }

    const position = arrayLength - index;
    // Delay before showing the match, function of position of the food
    const delay = position * 0.5;

    return (    
        <div>
            <motion.img 
                src={item.image} 
                custom={index} 
                style={imgStyle} 
                animate={controls}
                onAnimationComplete={() => {
                    if (match) {
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