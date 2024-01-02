import React, { useState } from "react";

const Form=()=>{
    const[text, setText]= useState("");
    const[flag, setFlag]= useState("");

    function submitForm(e){
        e.preventDefault();
        setFlag(text);
        setText("");
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Enter a text..." onChange={(e)=>setText(e.target.value)} value={text}/>
                <button type="submit">ADD</button>
            </form>
            <p>{flag}</p>
        </div>
    )
}

export default Form