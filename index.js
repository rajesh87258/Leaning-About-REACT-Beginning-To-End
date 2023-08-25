/*JAVASCRIPT CODE FOR PRACTICE */
// const heading = document.createElement("h2");
// heading.textContent = "Hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);
// console.log("JavaScript element:",heading);

/*REACT FIRST CODE WITH JS */
// const reactHeading = React.createElement("h1",{className:"head", id:"reactHead", children:"Hello React!"});
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading); 
// console.log('hy');

/* REACT CODE WITH JSX */
const jsxHeading = <>
                <h1 className="head">Hello JSX</h1>
                <p>This is created using JSX</p>
                <ul>
                <li> 1 </li>
             <li> 2 </li>
             </ul>
                </>;
               
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading); 