import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {LabelCheck} from '../../util/LabelCheck';

import Image from '../../components/image';
import Food from '../../components/food';

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

function Output({ variants, uploadedFile, showImage, setShowImage, setUploadedFile, labels, hotDogMode, mobile }) {
    const [loaded, setLoaded] = React.useState(false);
    const [matchState, setMatchState] = React.useState();
    const [mobileArray, setMobileArray] = React.useState([  {
        labels: [
            'could not recognize'
        ],
        image: notfood, 
    }]);
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
                'could not recognize'
            ],
            image: notfood, 
        },
    ]

    const hotDogArray = [
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
                'not hot dog'
            ],
            image: notfood, 
        },
    ]

    const FoodStyle = {
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '50px',
        backgroundColor: 'rgba(47,33,70,1)',
        boxShadow: '5px 10px',
        borderRadius: '50px'

    }

    React.useEffect(() => {
        imageArray.map((item, i) => {
            LabelCheck.compare(item, labels).then(match => {
                if (match.length > 0) {
                    if (!matchState) {
                        console.log(`match: ${match}`)
                        setMatchState(match)
                        if (mobile) {
                            setMobileArray([item, imageArray[imageArray.length-1]]);
                        }
                    }
                  
                }
                console.log(i);
                if (i === imageArray.length - 1) {
                    setLoaded(true)
                    console.log('end')
                }
            })
          
        })
        
    }, [0]) 

    if (loaded && !hotDogMode && !mobile) {
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div 
                style={FoodStyle}
                variants={variants}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                    <Image 
                    uploadedFile={uploadedFile} 
                    show={showImage} 
                    setShow={setShowImage} 
                    setUploadedFile={setUploadedFile}
                    labels={labels}
                    />
                    <Food 
                    show={showImage}
                    labels={labels}
                    imageArray={imageArray}
                    matchState={matchState}
                    />
                </motion.div>
            </AnimatePresence>
              
        )
    } else if (loaded && !hotDogMode && mobile) {
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div 
                style={FoodStyle}
                variants={variants}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                    <Image 
                    uploadedFile={uploadedFile} 
                    show={showImage} 
                    setShow={setShowImage} 
                    setUploadedFile={setUploadedFile}
                    labels={labels}
                    />
                    <Food 
                    show={showImage}
                    labels={labels}
                    imageArray={mobileArray}
                    matchState={matchState}
                    />
                </motion.div>
            </AnimatePresence>
              
        )
    } else if (loaded && hotDogMode) {
        return (
            <AnimatePresence exitBeforeEnter>
                <motion.div 
                style={FoodStyle}
                variants={variants}
                initial="hidden"
                animate="show"
                exit="hidden"
                >
                    <Image 
                    uploadedFile={uploadedFile} 
                    show={showImage} 
                    setShow={setShowImage} 
                    setUploadedFile={setUploadedFile}
                    labels={labels}
                    />
                    <Food 
                    show={showImage}
                    labels={labels}
                    imageArray={hotDogArray}
                    matchState={matchState}
                    hotDogMode={hotDogMode}
                    />
                </motion.div>
            </AnimatePresence>
        )
       
    } 
    
    else {
        return (
        <div style={{ color: 'white', fontSize: '5em'}}>
            Loading
        </div>
        )
    }
    
}

export default Output;