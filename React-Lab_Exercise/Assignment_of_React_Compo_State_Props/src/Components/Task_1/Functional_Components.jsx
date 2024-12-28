/* Task - 1 Create a functional component Greeting that accepts a name as a prop and
displays "Hello, [name]!". */


import React from 'react'

// Greeting Component
const Greeting = (props) => {
    return <h2>Hello, {props.name}!</h2>
}

// Functional_Components
const Functional_Components = (props) => {

  return (
    <div>
        <h1>Functional Component</h1>

        {/* Greeting Component Use */}
        <Greeting name={props.name} />

        <h2>Display the Name is --- {props.name}</h2>

    </div>
  )
}

export default Functional_Components