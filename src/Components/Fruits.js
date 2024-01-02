import React, { useState } from "react"

const Fruits=()=>{
    const[fruits, setFruits]= useState([]);
    const[item, setItem]= useState([])

    function updateFruits(e){
        e.preventDefault();

        setItem([...item, fruits]);
        setFruits("");
    }

    return(
        <div>
            <form onSubmit={updateFruits}>
                <input type="text" placeholder="Enter a fruit..." onChange={(e)=>setFruits(e.target.value)} value={fruits}/>
                <button type="submit">Add fruit</button>
            </form>
            {/* {
                item.map((fruit)=>(
                    <p>{fruit}, </p>
                ))
            } */}

            {/* or */}

            {item.join(",")}
        </div>
    )
}

export default Fruits;