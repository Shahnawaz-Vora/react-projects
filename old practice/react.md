# React

## Installing react

- `npm i -g create-react-app`

## Creating react app

- `create-react-app react-app`

## For starting npm server

- `npm start`

## Initial file

```
import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));
```

- This is index.js file in src folder to use react in the file we have to import first line and to render the react virtual dom element into the html dom we import second line

- Third line was jsx which stores the react element in element variable babble convert `<h1>Hello Word</h1>` to jsx

- At last line the reactdom render method render element into root element of html

## To install bootstrap

`npm i bootstrap`

## Extension Help in VS code

- Simple React Snippets

## Example of create component

- counter.jsx

```
import React, { Component } from 'react';

class Counter extends Component {
    // state = {  }
    render() {
        return <h1>Hello World</h1>;
    }
}

export default Counter;
```

- index.js

```
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

ReactDOM.render(<Counter />, document.getElementById("root"));
```

- If we want to pass one more element we have to wrap in div because jsx expression must have one parent element. , example

```
render() {
    return <div><h1>Hello World</h1><button>Click Me</button></div>;
}
```

- If we dont want to use <div> wrapping as parent unnecessary we can use empty <> </> tag

## Example with state variable

# JS6 Concepts

## Var vs let vs const

- lets assume we have a for loop and we initialize i in for now after the loop that i is still accessible where let and const are only have block scope they not let to i go after block of code

## Objects

```
const element = {
  name: "Mosh",
  walk() {
    console.log("walk");
  },
  talk() {
    console.log("talk");
  },
};
element.walk();
element.talk();

const targetMember = "name";

element[targetMember] = "John";
console.log(element);
```

## this keyword

### Case 1

```
const element = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
};
element.walk();

const walk = element.walk;
walk();
```

- The last line return the window object instead of element object and if strict mode is on it returns undefined instead of window object

- Now to bind the walk to element object we have to write this

`const walk = element.walk.bind(element)`

### Case 2

```
const person = {
    talk(){
        setTimeout(function(){
            console.log("this",this);
        },1000);
    }
};
person.talk();
```

- In this case the this return the window object instead of person because its in setTimeout , We can handle this by below code the arrow function helps to rebind this to person

```
const person = {
    talk(){
        setTimeout(() => {
            console.log("this",this);
        },1000);
    }
};
person.talk();
```

or

```
const person = {
    talk(){
        var self = this
        setTimeout(function() {
            console.log("self",self);
        },1000);
    }
};
person.talk();
```

## Functions (Arrow Function)

- With no parameter

```const square = () => {
    return 5*5;
}
```

- With single parameter

```const square = (square) => {
    return square*square;
}
```

or

```const square = square => {
    return square*square;
}
```

- We can remove return also if we write like this

`const square = square => square*square;`

## Filter

```
const jobs = [
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false}
];

const activeJobs = jobs.filter(function(job) { return job.isActive; });
```

- Above code in more better way

`const activeJobs = jobs.filter((job) => job.isActive);`

## Map function

```
const colors = ["red","green","yellow"]
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);
```

## Object Destructuring

- Initialize object values in one line , here below address is a object

`const {name , city} = address`

## Object Restructuring

- Initialize object values with new constant

`const {name:nm} = address`

```
const address = {
  name: "shanu",
  city: "indore",
};
const { name, city: ct } = address;
console.log(name, ct);
```

## Spread Operator

- Used to concatenate

```
const first = [1,2,3]
const second = [4,5,6]
const combined = [...first,'b',...second,'c']
console.log(combined)
```

- Used to clone

```
const clone = [...first];
```

- Same thing apply for object

**Note** : Advanced concepts like class , inheritance , modules , named and default exports are in 02 es6 refresher part 2 zip
