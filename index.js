ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

//render an <ul> with 2+ <li>s inside*/
ReactDOM.render(<ul><li>Object 1</li> <li>Object2</li></ul>, document.getElementById("root"));


function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)