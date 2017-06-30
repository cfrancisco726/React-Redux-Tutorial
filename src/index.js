import React from 'react';
// importing from react module/library
import ReactDom from 'react-dom'

// create a new component. This component should produce some HTML.

const App = function(){
  return <div>Hi</div>;
}

// const is es6 and declaring a variable
// this is the final variable, its constant
// JSX is a subset of Javascript represented in the div Hi
// JSX gets turned into HTML. Purpose is to turn JS into HTML.
// use babeljs compiler
// JSX is supposed to make our code more ledgible

// take this component's generated HTML and put it on the page (in the dom)

ReactDom.render(App);
// use react dom library when you want to render
// need to instantiate components before we render to the DOM

// everytime we write JSX
// the component name is a component class but using inside JSX makes it a component instance

<App></App>
// a component instance
