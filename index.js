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

// const h1 = document.createElement("h1");
// h1.textContent = "This is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1);

//vs 



//JSX returns javascript objects. Render turns these objects into DOM elements

// 1. Why do we need to `import React from "react"` in our files?
// React is what defines JSX

// 2. If I were to console.log(page) in index.js, what would show up?
// A JavaScript object. React elements that describe what React should
// eventually add to the real DOM for us.

// 3. What's wrong with this code:
// ```
// const page = (
//     <h1>Hello</h1>
//     <p>This is my website!</p>
// )
// ```
// We need our JSX to be nested under a single parent element

// 4. What does it mean for something to be "declarative" instead of "imperative"?
// Declarative means I can tell the computer WHAT to do 
// and expect it to handle the details. Imperative means I need
// to tell it HOW to do each step.

// 5. What does it mean for something to be "composable"?
// We have small pieces that we can put together to make something
// larger/greater than the individual pieces.

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
// ReactDOM.render(element, document.getElementById("root"))



function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))