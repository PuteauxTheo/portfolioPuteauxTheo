import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CirclePercent( value) {
    return (
        <div className='size-circular'>
            <CircularProgressbar 
                value={value.value} 
                background='true'
                backgroundPadding={7}
                text={`${value.value}%`}
                styles={{
                    text: {
                        fill: '#DBE2EF',
                        fontSize: 24,
                    },
                    path: {
                        stroke: '#DBE2EF',
                    },
                    trail: {
                        stroke: 'rgb(0,0,0,0.0)',
                    },
                    background: {
                        fill: '#112D4E',
                    }
                }}
            />
        </div>
    )
}