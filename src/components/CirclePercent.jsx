import * as React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CirclePercent( value ) {
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={value.value} text={`${value.value}%`}/>
        </div>
    )
}