import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import rice from '../../assets/asian.png';
import egg from '../../assets/breakfast.png';
import fries from '../../assets/fastfood.png';
import chicken from '../../assets/friedchicken.png';
import hamburger from '../../assets/hamburger.png';
import pizza from '../../assets/pizza.png';
import seafood from '../../assets/seafood.png';
import tacos from '../../assets/tacos.png';
import vegan from '../../assets/vegan.png';
import vegetarian from '../../assets/vegetarian.png';

import Item from '../item';

function Food({ show, labels }) {
    const [matchArray, setMatchArray] = React.useState(true);
    const imageArray = [
        {
            labels: [
                'rice'
            ],
            image: rice,
        },
        {
            labels: [
                'egg',
                'eggs',
                'fried egg'
            ],
            image: egg,
        },
        {
            labels: [
                'fries',
                'french fries',
                'fry'
            ],
            image: fries,
        },
        {
            labels: [
                'chicken'
            ],
            image: chicken,
        },
        {
            labels: [
                'hamburger'
            ],
            image: hamburger,
        },
        {
            labels: [
                'pizza'
            ],
            image: pizza,
        },
        {
            labels: [
                'seafood',
                'fish',
                'salmon'
            ],
            image: seafood,
        },
        {
            labels: [
                'tacos',
                'taco'
            ],
            image: tacos,
        },
        {
            labels: [
                'vegan'
            ],
            image: vegan, 
        },
        {
            labels: [
                'vegetarian'
            ],
            image: vegetarian, 
        },
    ]
    const arrayLength = imageArray.length;

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%'
    }

    const containerVariants = {
        hidden: { 
            opacity: 0,
            y: '100vh',
            transition: {
                duration: 0.5,
                type: 'spring'
            }
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5,
                delayChildren: 2,
                type: 'spring'
            }
        } 
    }

    return (
        <AnimatePresence exitBeforeEnter>
            { show && matchArray  && (
                <motion.div 
                style={containerStyle}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                    {  
                        imageArray.map((item, i) => (
                            <Item 
                                item={item} 
                                index={i} 
                                key={`${item}${i}`} 
                                arrayLength={arrayLength} 
                                labels={labels}
                            />
                        )) 
                    }
                </motion.div>
            )
            }
        </AnimatePresence>

      
        
    )

    
}

export default Food;
