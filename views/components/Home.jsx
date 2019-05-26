import React from 'react';
import Particles from '../module-components/Particles';
import Typed from 'react-typed';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: '#0D1116'
                }}
            >
                <Particles>
                    <div class="aa_txt" style={{ font: '100 10vh/1 Roboto', textAlign: 'center', color: '#0D1116' }}>
                        <span class="aa_inner" style={{ padding: '1rem', textTransform: 'uppercase', color: '#ffffff', background: '#0D1116' }}>
                            Jordan
                        </span>
                        <span style={{ padding: '0 2rem', background: '#ffffff' }} class="aa_of">
                            MAX
                        </span>
                    </div>
                    <div style={{ color: 'white', textAlign: 'center' }}>
                        <p> Jordan is a&nbsp;
                        <Typed
                                strings={[
                                    'Software Engineer.',
                                    'Full Stack Web Developer.',
                                    'Mobile App Developer.',
                                    'ReactJS Developer.',
                                    'Gamer.',
                                    'Blackhawks/Bulls/Whitesox fan.',
                                    'Animal lover.']}
                                typeSpeed={40}
                                backSpeed={50}
                                ref="typedTarget"
                                loop >
                                <span style={{ color: '#fed136' }} id="typedTarget"></span>
                            </Typed>
                        </p>
                    </div>
                </Particles>
            </div>
        )
    }
}

export default Home;