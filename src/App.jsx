import React, { useState } from "react"

const App = () => {
    const [name , setName] = useState("");
    const [fullName ,setFullNmae ] = useState(); 

    const inputEvent = (Event) =>{

        setName(Event.target.value);
    };

    // const onSubmit = () => {
    //     setFullNmae (name);  
    // };
 return (

 <>
<div>
 <h1>Hello {fullName} </h1>
 <input type='text' placeholder="Enetr your name"
  onChange = {inputEvent}
  value={name} />
 <button onClick={onSubmit} >Click Me</button>

</div>
 </>
    );
};

export default App;