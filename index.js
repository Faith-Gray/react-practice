// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

//render an <ul> with 2+ <li>s inside*/
// ReactDOM.render(<ul><li>Object 1</li> <li>Object2</li></ul>, document.getElementById("root"));


// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// };

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root");
// )

//why react? 
//It's composable and declaritive (tell it what to do rather how to do it)

//render a line of code using the div root with vanilla javascript
// const root = document.getElementById('root');
// const text = document.createTextNode("New sentence to test");
// root.appendChild(text);

const h1 = document.createElement("h1");
h1.textContent = "This is an imperative way to program";
h1.className = "header";
document.getElementById("root").append(h1);

//vs 

const element = <h1 className="header">This is JSX</h1>
console.log(element)
ReactDOM.render(element, document.getElementById("root"))

//example
const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)


//making a navbar in React 
const navbar = (
    <nav>
        <h1 className="website">This is the website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)