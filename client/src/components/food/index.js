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

import {LabelCheck} from '../../util/LabelCheck';

function Food({ show, labels }) {
    const [loading, setLoading] = React.useState(true);
    const [imageArray, setImageArray] = React.useState(
        [
            {
                labels: [
                    'rice'
                ],
                image: rice,
                select: false
            },
            {
                labels: [
                    'egg',
                    'eggs',
                    'fried egg'
                ],
                image: egg,
                select: false
            },
            {
                labels: [
                    'fries'
                ],
                image: fries,
                select: false,
            },
            {
                labels: [
                    'chicken'
                ],
                image: chicken,
                select: false
            },
            {
                labels: [
                    'hamburger'
                ],
                image: hamburger,
                select: false
            },
            {
                labels: [
                    'pizza'
                ],
                image: pizza,
                select: false
            },
            {
                labels: [
                    'seafood'
                ],
                image: seafood,
                select: false
            },
            {
                labels: [
                    'tacos',
                    'taco'
                ],
                image: tacos,
                select: true
            },
            {
                labels: [
                    'vegan'
                ],
                image: vegan, 
                select: false
            },
            {
                labels: [
                    'vegetarian'
                ],
                image: vegetarian, 
                select: false
            },
        ]
    );
    React.useEffect(() => {
        LabelCheck.compare(imageArray, labels).then(match => console.log(match));

    }, [])

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: '100%',
        height: '100vh'
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1.5,
            }
        } 
    }

    const arrayLength = imageArray.length;

    console.log('match')
    return (
        <AnimatePresence exitBeforeEnter>
            { show && (
                <motion.div 
                style={containerStyle}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                    {  
                        imageArray.map((item, i) => (
                            <Item item={item} index={i} key={`${item}${i}`} arrayLength={arrayLength}/>
                        )) 
                    }
                </motion.div>
            )
            }
        </AnimatePresence>

      
        
    )

    
}

export default Food;
