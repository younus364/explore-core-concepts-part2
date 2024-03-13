import { useState } from "react"

export default function Counter(){
    const [count ,setCount] = useState(0);
    
const handdleAdd = () =>{
    const newCount = count+1;
    setCount(newCount)
}
const handleReduce = ()=>{
    const oldCount = count -1;
    setCount(oldCount)
}
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>counters:{count}</h3>
            <button onClick={handdleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}