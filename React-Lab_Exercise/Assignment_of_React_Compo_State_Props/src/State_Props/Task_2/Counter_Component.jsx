/* Task - 2 Create a Counter component with a button that increments a count value using
React state. Display the current count on the screen */

import React, { useState } from 'react'

const Counter_Component = () => {

    // Set the Count & setCount using UseState Hook
    const [ count,setCount ] = useState(0);

    // Create addCount Variable to increment count value
    const addCount = () => {
        setCount(count + 1);
    }


    return (
        <div>

            <h1>Counter Component</h1>

            <h2>Count is --- {count}</h2>
            {/* Create Button of Add Count[Increment the Digits] */}
            <button onClick={addCount}>Add Count</button>

        </div>
    )
}

export default Counter_Component