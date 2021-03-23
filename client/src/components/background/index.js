import React from 'react';
import Particles from 'react-tsparticles';
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

function Background() {
    return (
        <div>
            <Particles
                options={
                    {
                        "autoPlay": true,
                        "backgroundMode": {
                            "enable": true,
                            zIndeX: -1000
                        },
                        // "background": {
                        //   "color": {
                        //     "value": "#fff"
                        //   },
                        // //   "image": "",
                        // //   "position": "50% 50%",
                        // //   "repeat": "no-repeat",
                        // //   "size": "cover",
                        // //   "opacity": 1
                        // },
                        // "backgroundMask": {
                        //   "composite": "destination-out",
                        //   "cover": {
                        //     "color": {
                        //       "value": "#fff"
                        //     },
                        //     "opacity": 1
                        //   },
                        //   "enable": false
                        // },
                        // "fullScreen": {
                        //   "enable": true,
                        //   "zIndex": -1000
                        // },
                        "detectRetina": true,
                        "fpsLimit": 60,
                        "infection": {
                          "cure": false,
                          "delay": 0,
                          "enable": false,
                          "infections": 0,
                          "stages": []
                        },
                        "interactivity": {
                          "detectsOn": "canvas",
                          "events": {
                            "onClick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "onDiv": {
                              "selectors": "#repulse-div",
                              "enable": false,
                              "mode": "repulse",
                              "type": "circle"
                            },
                            "onHover": {
                              "enable": true,
                              "mode": "bubble",
                              "parallax": {
                                "enable": false,
                                "force": 60,
                                "smooth": 10
                              }
                            },
                            "resize": true
                          },
                          "modes": {
                            "attract": {
                              "distance": 200,
                              "duration": 0.4,
                              "speed": 1
                            },
                            "bounce": {
                              "distance": 200
                            },
                            "bubble": {
                              "distance": 400,
                              "duration": 2,
                              "opacity": 0.8,
                              "size": 40
                            },
                            "connect": {
                              "distance": 80,
                              "links": {
                                "opacity": 0.5
                              },
                              "radius": 60
                            },
                            "grab": {
                              "distance": 400,
                              "links": {
                                "blink": false,
                                "consent": false,
                                "opacity": 1
                              }
                            },
                            "light": {
                              "area": {
                                "gradient": {
                                  "start": {
                                    "value": "#ffffff"
                                  },
                                  "stop": {
                                    "value": "#000000"
                                  }
                                },
                                "radius": 1000
                              },
                              "shadow": {
                                "color": {
                                  "value": "#000000"
                                },
                                "length": 2000
                              }
                            },
                            "push": {
                              "quantity": 4
                            },
                            "remove": {
                              "quantity": 2
                            },
                            "repulse": {
                              "distance": 200,
                              "duration": 0.4,
                              "speed": 1
                            },
                            "slow": {
                              "factor": 3,
                              "radius": 200
                            },
                            "trail": {
                              "delay": 1,
                              "quantity": 1
                            }
                          }
                        },
                        "manualParticles": [],
                        "motion": {
                          "disable": false,
                          "reduce": {
                            "factor": 4,
                            "value": true
                          }
                        },
                        "particles": {
                          "bounce": {
                            "horizontal": {
                              "random": {
                                "enable": false,
                                "minimumValue": 0.1
                              },
                              "value": 1
                            },
                            "vertical": {
                              "random": {
                                "enable": false,
                                "minimumValue": 0.1
                              },
                              "value": 1
                            }
                          },
                          "collisions": {
                            "bounce": {
                              "horizontal": {
                                "random": {
                                  "enable": false,
                                  "minimumValue": 0.1
                                },
                                "value": 1
                              },
                              "vertical": {
                                "random": {
                                  "enable": false,
                                  "minimumValue": 0.1
                                },
                                "value": 1
                              }
                            },
                            "enable": false,
                            "mode": "bounce",
                            "overlap": {
                              "enable": true,
                              "retries": 0
                            }
                          },
                          "color": {
                            "value": "#ffffff",
                            "animation": {
                              "h": {
                                "count": 0,
                                "enable": false,
                                "offset": 0,
                                "speed": 1,
                                "sync": true
                              },
                              "s": {
                                "count": 0,
                                "enable": false,
                                "offset": 0,
                                "speed": 1,
                                "sync": true
                              },
                              "l": {
                                "count": 0,
                                "enable": false,
                                "offset": 0,
                                "speed": 1,
                                "sync": true
                              }
                            }
                          },
                          "life": {
                            "count": 0,
                            "delay": {
                              "random": {
                                "enable": false,
                                "minimumValue": 0
                              },
                              "value": 0,
                              "sync": false
                            },
                            "duration": {
                              "random": {
                                "enable": false,
                                "minimumValue": 0.0001
                              },
                              "value": 0,
                              "sync": false
                            }
                          },
                          "links": {
                            "blink": false,
                            "color": {
                              "value": "#000"
                            },
                            "consent": false,
                            "distance": 150,
                            "enable": false,
                            "frequency": 1,
                            "opacity": 0.4,
                            "shadow": {
                              "blur": 5,
                              "color": {
                                "value": "#00ff00"
                              },
                              "enable": false
                            },
                            "triangles": {
                              "enable": false,
                              "frequency": 1
                            },
                            "width": 1,
                            "warp": false
                          },
                          "move": {
                            "angle": {
                              "offset": 45,
                              "value": 90
                            },
                            "attract": {
                              "enable": false,
                              "rotate": {
                                "x": 600,
                                "y": 1200
                              }
                            },
                            "decay": 0,
                            "direction": "none",
                            "distance": 0,
                            "enable": true,
                            "gravity": {
                              "acceleration": 9.81,
                              "enable": false,
                              "maxSpeed": 50
                            },
                            "path": {
                              "clamp": true,
                              "delay": {
                                "random": {
                                  "enable": false,
                                  "minimumValue": 0
                                },
                                "value": 0
                              },
                              "enable": false
                            },
                            "outModes": {
                              "default": "out",
                              "bottom": "out",
                              "left": "out",
                              "right": "out",
                              "top": "out"
                            },
                            "random": false,
                            "size": false,
                            "speed": 2,
                            "straight": false,
                            "trail": {
                              "enable": false,
                              "length": 10,
                              "fillColor": {
                                "value": "#000000"
                              }
                            },
                            "vibrate": false,
                            "warp": false
                          },
                          "number": {
                            "density": {
                              "enable": true,
                              "area": 800,
                              "factor": 1000
                            },
                            "limit": 0,
                            "value": 80
                          },
                          "opacity": {
                            "random": {
                              "enable": true,
                              "minimumValue": 0.1
                            },
                            "value": 1,
                            "animation": {
                              "count": 0,
                              "enable": true,
                              "speed": 1,
                              "sync": false,
                              "destroy": "none",
                              "minimumValue": 0.2,
                              "startValue": "random"
                            }
                          },
                          "reduceDuplicates": false,
                          "rotate": {
                            "random": {
                              "enable": true,
                              "minimumValue": 0
                            },
                            "value": 0,
                            "animation": {
                              "enable": true,
                              "speed": 5,
                              "sync": false
                            },
                            "direction": "random",
                            "path": false
                          },
                          "shadow": {
                            "blur": 0,
                            "color": {
                              "value": "#000000"
                            },
                            "enable": false,
                            "offset": {
                              "x": 0,
                              "y": 0
                            }
                          },
                          "shape": {
                            "options": {
                              "character": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                              },
                              "char": {
                                "fill": false,
                                "font": "Verdana",
                                "style": "",
                                "value": "*",
                                "weight": "400"
                              },
                              "polygon": {
                                "sides": 5
                              },
                              "star": {
                                "sides": 5
                              },
                              "image": [
                                {
                                  "src": apple,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": avocado,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": bacon,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": banana,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": beef,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": bread,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": broccoli,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": cake,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": cheese,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": chips,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": crab,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": cupcake,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": dumpling,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": egg,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": fish,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": fries,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": hamburger,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": hotdog,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": icecream,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": mango,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": noodles,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": octopus,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": orange,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": pineapple,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": pizza,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": popcorn,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": pumpkin,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": sandwich,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": shrimp,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": spaghetti,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": spam,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": taco,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": tomato,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": waffle,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": watermelon,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": yogurt,
                                  "width": 32,
                                  "height": 32
                                },
                              ],
                              "images": [
                                { 
                                  "src": apple,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": avocado,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": bacon,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": banana,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": beef,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": bread,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": broccoli,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": cake,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": cheese,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": chips,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": crab,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": cupcake,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": dumpling,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": egg,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": fish,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": fries,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": hamburger,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": hotdog,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": icecream,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": mango,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": noodles,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": octopus,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": orange,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": pineapple,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": pizza,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": popcorn,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": pumpkin,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": sandwich,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": shrimp,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": spaghetti,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": spam,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": taco,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": tomato,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": waffle,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": watermelon,
                                  "width": 32,
                                  "height": 32
                                },
                                {
                                  "src": yogurt,
                                  "width": 32,
                                  "height": 32
                                },
                              ]
                            },
                            "type": "image"
                          },
                          "size": {
                            "random": {
                              "enable": false,
                              "minimumValue": 1
                            },
                            "value": 16,
                            "animation": {
                              "count": 0,
                              "enable": false,
                              "speed": 40,
                              "sync": false,
                              "destroy": "none",
                              "minimumValue": 0.1,
                              "startValue": "random"
                            }
                          },
                          "stroke": {
                            "width": 0,
                            "color": {
                              "value": "#000000",
                              "animation": {
                                "h": {
                                  "count": 0,
                                  "enable": false,
                                  "offset": 0,
                                  "speed": 1,
                                  "sync": true
                                },
                                "s": {
                                  "count": 0,
                                  "enable": false,
                                  "offset": 0,
                                  "speed": 1,
                                  "sync": true
                                },
                                "l": {
                                  "count": 0,
                                  "enable": false,
                                  "offset": 0,
                                  "speed": 1,
                                  "sync": true
                                }
                              }
                            }
                          },
                          "twinkle": {
                            "lines": {
                              "enable": false,
                              "frequency": 0.05,
                              "opacity": 1
                            },
                            "particles": {
                              "enable": false,
                              "frequency": 0.05,
                              "opacity": 1
                            }
                          }
                        },
                        "pauseOnBlur": true,
                        "pauseOnOutsideViewport": false,
                        "responsive": [],
                        "themes": []
                      }
            }/>
        </div>
    )
}

export default Background;