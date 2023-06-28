let root=ReactDOM.createRoot(document.getElementById('myreactdiv'));

let Greeting = (props) =>{
   
    return (
        <div>
            <h1 class='bg-primary text-white w-50'> Hello World! </h1>
            <h2 class='bg-warning'> Empid: {props.empid} </h2>
            <h2 class='bg-secondary'> Wages Per Hour: {props.wageph} </h2>
            <h2 class='bg-warning'> Contact Number: {props.contactnumber} </h2>
            <h2 class='bg-secondary'> Retiring in {75 - props.age} years </h2>
            <h2 class='bg-warning'> Is a US Citizen: {props.uscitizen+''} </h2> 
            <h2 class='bg-secondary'> Departments worked in: {props.depts[0]+','+props.depts[1]} </h2>
            <h2 class='bg-warning'> Calculated Data: {props.hra} </h2>
        </div>
    )
}

let calculatedData="56275";
root.render(<Greeting empid="e12" wageph="80" contactnumber="123" age={35} uscitizen={false} depts={['ac','hr']} hra={calculatedData}/>);
