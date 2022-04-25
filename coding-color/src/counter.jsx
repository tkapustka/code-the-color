import React, { useState, useEffect } from 'react';
import './App.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='Counter'>
            <div>{count}</div>
            <div>
                <backgroundColor onClick={() => setCount(count + 1)}></backgroundColor>
            </div>
        </div>
    )
}

export default Counter;