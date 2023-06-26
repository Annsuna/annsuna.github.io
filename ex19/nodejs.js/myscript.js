//get the root
let root=ReactDOM.createRoot(document.getElementById('mydiv'));
//create the custom element

const MyHeading=React.createElement("h1",{},"English Classics");
const MyBtn=React.createElement("button",{"className":"btn btn-success"},"Ubs Button");
//create the list
const Mylist=React.createElement("u1",{},
    React.createElement("li", {}, "Emma"),
    React.createElement("li", {}, "Persuasion"),
    React.createElement("li", {}, "Pride & Prejudice"));

//render
root.render([MyHeading,MyBtn,Mylist]);
//