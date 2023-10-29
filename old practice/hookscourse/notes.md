# Use State

* useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.

* We have to import first <br>
`import React, { useState } from 'react'`

* Then we can use like this <br>
`const [items,setItems] = useState([])
const [employee,setEmployee] = useState("") `

# useEffect State

* The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. <br>
`Syntax: useEffect(<function>, <dependency>)`

* We have to import first <br>
`import React, { useEffect } from 'react'`

* The first parameter function call after every render.

* when we pass empty array as second parameter that simply means it run only on first render, this Clean Up function remove unwanted memory leaks and remove unnecsary unwanted behaviour using empty array <br> 
`useEffect(()=>{statements} , [])`

* We have to put dependeny to make it conditional useEffect not run everytime when screen render , which helps to increase performance

* For Example:<br/>
```javascript
useEffect(()=>{
        document.title = you clicked: ${count} times
        console.log("Called Use Effect")
},[count])
```

# Difference between useState and useEffect

## For useState()
* First, we have the functional component which did not supported state, in other words, a functional component is a stateless component.

* Now, with Hooks, we have the functional component but stateful. It is achieved by using useState.

## For useEffect()
* First, with stateless functional component, we didn't have component lifecycle hooks. In other words, whenever you want to use component lifecycle hooks, you should consider using class component.

* Now, we are able to use component lifecycle hooks without using class component. It is achieved by using useEffect. In other words, now whenever we want to use component lifecycle hooks, we already have two options either using class component or using Hooks with useEffect.

# Clean useEffect function

* in this return function is used to clean the code if the ui is unmounted <br> 
```javascript
useEffect(()=>{
    console.log("Called Use Effect")
    window.addEventListener('mousemove',logMousePosition)

    return()=>{
        window.removeEventListener('mousemove',logMousePosition)
        console.log('component is unmounted , and the code is clean')
    }
},[])
```
**Note: JSONPlaceholder is used for fake json data online , and axios is used for api requests** 
