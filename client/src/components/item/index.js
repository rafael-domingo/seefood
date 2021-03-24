import React from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

function Item({item, index, arrayLength, labels, matchState, text}) {
    const [match, setMatch] = React.useState();
    // check if there is a match
    React.useEffect(() => {
        item.labels.map(label => {
            if(label === text.toLowerCase()) {
                setMatch(true)
            }
        })
    }, [0])

    // Animations
    const controls = useAnimation();
    controls.start( index => ({ 
        opacity: [0.1,1,0.1],
        scale: [1,2,1],
        transition: {
            duration: 0.15,
            // delay: index * 0.15
            }
        })
    )

    const imgStyle = {
        margin: '1em',
        height: '4em',
        width: '4em'
    }

    const position = arrayLength - index;
    // Delay before showing the match, function of position of the food
    const delay = position * 0.15;

    return (    
        <AnimatePresence exitBeforeEnter>
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
                                delay: 0.5
                            }
                        })
                       
                    } 
                      
                   

                }}
            />        
        </AnimatePresence>
    )   
}

export default Item;