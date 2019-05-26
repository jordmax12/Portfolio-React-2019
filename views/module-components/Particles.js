import React from 'react';
import Particles from 'react-particles-js';

class ParticlesComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%' }}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 200,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#fff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 3,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "distance": 500,
                                "color": "#23e7ff",
                                "opacity": 0.4,
                                "width": 2
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "grab"
                                },
                                // "onclick": {
                                //     "enable": true,
                                //     "mode": "repulse"
                                // },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 150,
                                    "line_linked": {
                                        "opacity": 0.5,
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 4,
                                    "duration": 0.3,
                                    "opacity": 1,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        }
                    }} />

                </div>
                <div style={{ width: 'auto', marginLeft: 'auto', marginRight: 'auto', position: 'absolute', top: '50%', right: 0, left: 0, margin: '0 auto' }}>
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}

export default ParticlesComponent;