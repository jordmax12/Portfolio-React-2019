import React from 'react';
import Particles from '../module-components/Particles';
import Typed from 'react-typed';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('here')
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="home">
                <div id="littleJordanHolder">
                    <div id="littleJordanCanvas"></div>
                </div>
                <Particles>
                    <div className="aa_txt">
                        <span className="aa_inner">
                            Jordan
                        </span>
                        <span className="aa_of">
                            MAX
                        </span>
                    </div>
                    <div className="cW tac mt10 ">
                        <p> Jordan is a&nbsp;
                        <Typed
                                strings={[
                                    'Software Engineer',
                                    'Full Stack Web Developer',
                                    'Mobile App Developer',
                                    'ReactJS Developer',
                                    'Gamer',
                                    'Blackhawks/Bulls/Whitesox fan',
                                    'Animal lover']}
                                typeSpeed={40}
                                backSpeed={50}
                                ref="typedTarget"
                                loop >
                                <span id="typedTarget"></span>
                            </Typed>
                        </p>
                    </div>
                </Particles>
            </div>
        )
    }
}

export default Home;