const {useState} = React;

let MyCounter = () =>{
    let [counter,setCounter]=useState(27);
    // let [myname,setMyName]=useState("sp");

    let clickHandler = () =>{
        counter++;
        setCounter(counter);
        console.log(counter);
    
    // let nameChange = () =>{
    //     setMyName("Jane Doe");
    // }

    }
        return(
            <div>
                <button onClick={clickHandler}>Click me</button>
                <p>{counter}</p>
                {/* <button onClick = {nameChange}> Change Name</button>
                <p> {myname} </p> */}
            </div>
        )
    };
let root=ReactDOM.createRoot(document.getElementById('mydiv'));
root.render(<MyCounter/>);