import React, { useState, useEffect } from 'react';
import './App.css'

const Counter = () => {
    const [count, setCount] = useState();

    useEffect(() => console.log(count));

    const Counter = () => {
        <button onClick={() => setCount(count + 1)}></button>
    }

    return (
        <div className='Counter'>
            <div>{count}</div>
            {/* <div>
                <backgroundColor onClick={() => setCount(count + 1)} />
            </div> */}
        </div>
    )
}

export default Counter;