import React from 'react';
import { motion, AnimatePresence, m } from 'framer-motion';

import apple from '../../assets/apple.png';
import avocado from '../../assets/avocado.png';
import bacon from '../../assets/bacon.png';
import banana from '../../assets/banana.png';
import beef from '../../assets/beef.png';
import bread from '../../assets/bread.png';
import broccoli from '../../assets/broccoli.png';
import cake from '../../assets/cake.png';
import cheese from '../../assets/cheese.png';
import chips from '../../assets/chips.png';
import crab from '../../assets/crab.png';
import cupcake from '../../assets/cupcake.png';
import dumpling from '../../assets/dumpling.png';
import egg from '../../assets/eggs.png';
import fish from '../../assets/fish.png';
import fries from '../../assets/fries.png';
import hamburger from '../../assets/hamburger.png';
import hotdog from '../../assets/hotdog.png';
import icecream from '../../assets/icecream.png';
import mango from '../../assets/mango.png';
import noodles from '../../assets/noodles.png';
import notfood from '../../assets/notfood.png';
import octopus from '../../assets/octopus.png';
import orange from '../../assets/orange.png';
import pineapple from '../../assets/pineapple.png';
import pizza from '../../assets/pizza.png';
import popcorn from '../../assets/popcorn.png';
import pumpkin from '../../assets/pumpkin.png';
import sandwich from '../../assets/sandwich.png';
import shrimp from '../../assets/shrimp.png';
import spaghetti from '../../assets/spaghetti.png';
import spam from '../../assets/spam.png';
import taco from '../../assets/taco.png';
import tomato from '../../assets/tomato.png';
import waffle from '../../assets/waffle.png';
import watermelon from '../../assets/watermelon.png';
import yogurt from '../../assets/yogurt.png';

import Item from '../item';

function Food({ show, labels }) {
    const [matchArray, setMatchArray] = React.useState();

    const imageArray = [
        {
            labels: [
                'apple'
            ],
            image: apple,
        },
        {
            labels: [
                'avocado'
            ],
            image: avocado,
        },
        {
            labels: [
                'bacon'
            ],
            image: bacon,
        },
        {
            labels: [
                'banana'
            ],
            image: banana
        },
        {
            labels: [
                'beef',
                'steak',
                'tenderloin',
                'ribeye',
                'rib-eye',
                't-bone'
            ],
            image: beef
        },
        {
            labels: [
                'bread',
                'baguette',
                'toast'
            ],
            image: bread
        },
        {
            labels: [
                'broccoli'
            ],
            image: broccoli
        },
        {
            labels: [
                'cake',
                'birthday'
            ],
            image: cake
        },
        {
            labels: [
                'cheese'
            ],
            image: cheese
        },
        {
            labels: [
                'chips',
                'crisps',
                'doritos',
                'pringles',
            ],
            image: chips
        },
        {
            labels: [
                'crab'
            ],
            image: crab
        },
        {
            labels: [
                'cupcake',
                'cup cake'
            ],
            image: cupcake
        },
        {
            labels: [
                'dumpling',
                'dimsum',
                'gyoza'
            ],
            image: dumpling
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
                'fish',
                'filet',
                'salmon',
                'trout',
                'tilapia'
            ],
            image: fish
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
                'hamburger'
            ],
            image: hamburger,
        },
        {
            labels: [
                'hot dog',
                'wiener',
                'sausage',
                'hotdog',
            ],
            image: hotdog
        },
        {
            labels: [
                'icecream',
                'sundae',
                'ice cream',
                'cone'
            ],
            image: icecream
        },
        {
            labels: [
                'mango'
            ],
            image: mango
        },
        {
            labels: [
                'noodles',
                'pasta',
                'lo mein',
                'pad thai'
            ],
            image: noodles
        },
        {
            labels: [
                'octopus',
                'squid',
                'calamari'
            ],
            image: octopus
        },
        {
            labels: [
                'orange',
                'clementine',
                'mandarin'
            ],
            image: orange
        },
        {
            labels: [
                'pineapple'
            ],
            image: pineapple
        },
        {
            labels: [
                'pizza'
            ],
            image: pizza,
        },
        {
            labels: [
                'popcorn'
            ],
            image: popcorn
        },
        {
            labels: [
                'pumpkin'
            ],
            image: pumpkin
        },
        {
            labels: [
                'sandwich',
                'sub',
                'hoagie',
                'grilled cheese'
            ],
            image: sandwich
        },
        {
            labels: [
                'shrimp',
                'crawfish',
            ],
            image: shrimp
        },
        {
            labels: [
                'pasta',
                'spaghetti',
                'mac and cheese'
            ],
            image: spaghetti
        },
        {
            labels: [
                'spam'
            ],
            image: spam
        },
        {
            labels: [
                'tacos',
                'taco',
                'tortilla'
            ],
            image: taco,
        },
        {
            labels: [
                'tomato',
                'roma tomato',
            ],
            image: tomato, 
        },
        {
            labels: [
                'waffle',
                'waffles',
                'chicken and waffles'
            ],
            image: waffle
        },
        {
            labels: [
                'watermelon',
                'water melon'
            ],
            image: watermelon
        },
        {
            labels: [
                'yogurt',
                'greek yogurt',
                'yoghurt',
                'greek yoghurt'
            ],
            image: yogurt
        },
        {
            labels: [
                'cannot recognize'
            ],
            image: notfood, 
        },
    ]
    const arrayLength = imageArray.length;

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
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
                // delay: 0.5,
                delayChildren: 1,
                type: 'spring'
            }
        } 
    }

    const handleMatch = (array) => {
        console.log(`handleMatch: ${array}`)
        // setMatchArray(array);
    }

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
                            <Item 
                                item={item} 
                                index={i} 
                                key={`${item}${i}`} 
                                arrayLength={arrayLength} 
                                labels={labels}
                                handleMatch={handleMatch}
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
