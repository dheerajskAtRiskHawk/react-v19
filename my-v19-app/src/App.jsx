import React from "react";
import { useRef, forwardRef } from "react";


const InputField = (props, ref) => {
  return <input className="form-control mb-2" ref={ref} {...props}/>;
};


export default function App() {

  const inputRef = useRef(null); //placeholder to store the reference of element.

  const focusInput = ()=>{
    console.log('focusInput');
    if(inputRef.current){
      inputRef.current.focus();
    }
    // get the reference of input from child component. and call focus method on it.
  }
 
return (
    <div className="container">
      <InputField ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput} >Focus Input</button>
    </div>
  );
}
