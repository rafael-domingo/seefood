import React from 'react';
import { motion, AnimatePresence, m } from 'framer-motion';

import Item from '../item';

function Food({ show, labels, imageArray, matchState = 'Could not recognize', hotDogMode}) {
    const [text, setText] = React.useState();
    const [hotDog, setHotDog] = React.useState();
    React.useEffect(() => {
        if (hotDogMode) {
            if (imageArray[0].labels.includes(matchState.toLowerCase())) {
                setText('Hot Dog')
                setHotDog(true);
            } else {
                setText('Not Hot Dog')
                setHotDog(false);
            }
        }
        else {
            setText(matchState)
        }
    }, [0]) 
    const arrayLength = imageArray.length;

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
    }

    const labelStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        fontSize: '2em',
        color: 'white',
    }
    const containerVariants = {
        hidden: { 
            opacity: 0,
            transition: {
                duration: 1,
                type: 'spring'
            }
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                delayChildren: 1,
                type: 'spring'
            }
        } 
    }

    const labelVariants = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delay: 1
            }
        }
    }

    return (
        <AnimatePresence exitBeforeEnter>
            { show && text && (
                <motion.div 
                style={containerStyle}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                    <motion.div 
                        style={labelStyle}
                        variants={labelVariants}
                        initial="hidden"
                        animate="show"
                        exit="hidden">
                        {text}
                    </motion.div>
                    {  
                        imageArray.map((item, i) => (
                            <Item 
                                item={item} 
                                index={i} 
                                key={`${item}${i}`} 
                                arrayLength={arrayLength} 
                                labels={labels}
                                matchState={matchState}                            
                                text={text}    
                            />
                        )) 
                    }
                </motion.div>
            )
            }
            {/* {
                !loading && (
                    <div style={{color: 'white'}}>
                        Loading complete
                    </div>
                )
            } */}
        </AnimatePresence>

        
        
    )

 

    
}

export default Food;
