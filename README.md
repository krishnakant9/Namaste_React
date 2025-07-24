# NAMASTE REACT


# Parcel
- Dev Build
- Local Server
- HMR(Hot Module Reloading) - uses a file watching algorithm - written in c++
- Caching - Faster Builds
- Image Optimizations
- Minification
- Bundler
- comppress your filees
- Tree shaking
- Diagonistics
- Error handling

Ep-01 to Ep-03
/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm an H1 tag </h1>
 *          <h2>I'm an H2 tag </h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an H1 tag </h1>
 *          <h2>I'm an H2 tag </h2>
 *      </div>
 * </div>
 */

 const heading = React.createElement("div",{id:"parent"},[
     React.createElement("div",{id:"child1"},[
         React.createElement("h1",{},"I'm an H1 tag"),
         React.createElement("h2",{},"I'm an H2 tag")
     ]),
     React.createElement("div",{id:"child2"},[
         React.createElement("h1",{},"I'm an H1 tag"),
         React.createElement("h2",{},"I'm an H2 tag")
     ])
 ]);

     console.log(heading);
        
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(heading);

EP -  03

React Element
React.createElement => JS object => render => HTML Element

 const heading = React.createElement("h1",{id:"heading"},"Namaste React");

root.render(heading);

this look very clumsy and hard to write and read and this is why JSX was created
 JSX is not HTML in JS , it is HTML like Sysntax.
 const jsxHeading = <h1 id= "heading">Namaste React Using JSX</h1>
 console.log(jsxHeading);
 root.render(jsxHeading);
 /*this JSX code cannot be understood by Js engine here comes work of parcel , so parcel transpiled 
 the code before it reaches Js engine. Parcel uses Babel to transpile JSX code
 JSX =>React.createElement => JS object => render => HTML Element*/

 React functional Component
 const HeadingElement = () =>(
     <div id="container">
     <h1 className="heading">Namaste React functional Component</h1>
     </div>
 );


 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<HeadingElement/>)


 EP-04
 BUilding a food Ordering app


*Header
    -Logo
    -Nav-Items
*Body
    -search
    -ResturantContainer
        -ResturantCard
        -Img
        -Name of Res,Star Rating,cuisine,delivery time
*Footer
    -Copyright
    -Links
    -Address
    -Contact Detail


There are two types of exports and imports

-Default Export/Import
    export default component
    import component from "path"

-Named Export/Import
    export const component;
    import {component} from "path";

# React Hooks
(Normal Js utility function)

-useState() - superpowerful state variables in React
useEffect()