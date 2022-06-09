import react, {ReactElement} from 'react';
import {WaveDiv} from './style';

interface propsInfo {
location? : number;
rotation? : number;
style? : string;
}

const Wave = (props : propsInfo) : ReactElement => {
    const {location, rotation, style} = props;
    return (
        <WaveDiv REM={location} DEG={rotation}>
            <div className={style === undefined ? "non-style" : style}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 135 28" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="white" />
                    </g>
                </svg>
            </div>
        </WaveDiv>
    )
}

export default Wave;