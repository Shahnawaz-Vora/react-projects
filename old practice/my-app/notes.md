## To create app
* `npx create-react-app appname`

* app.js app function return only one element in which all elements are wrap and this one wrap in root element
->this app function contains jsx not html it look similar to html

## Commenting in jsx
* use {/* statement */} for comment

## Type of component in react
Functional component and class component

* Functional Components: Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions. We can create a functional component to React by writing a JavaScript function.
* Class Component: This is the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application).

## Important difference of functional and class components
* Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class.
* For functional components, we use hooks (useState) to manage the state. If you write a function component and realise you need to add some state to it, previously you had to convert it to a class component. Now you can use a Hook inside the existing function component to manage the state and no need to convert it into the Class component. Instead of Classes, one can use Hooks in the Functional component as this is a much easier way of managing the state. Hooks can only be used in functional components, not in-class components.

**Note:** We always write react component like this HomeComponent otherwise it will treat as html dom

## Props

* Props are immutable , and it is used to send the data from parent component to child component

* We can reuse component by copying component and send another props value 

* For Example <br/>
`<DemoComponent name="Shanu" city="Anand"/>
<DemoComponent name="Irfan" city="Nadiad"/>`

* We can also pass props like this , even we mispell parameter we get correct output
`export default function DemoComponent({name,city,children})`

## Employee Component

* There key attribute is not necessary but its remove the warning coming in console

## CSS Modules

* Naming of css modules like stylesheetname.module.css