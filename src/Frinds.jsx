import { useEffect, useState } from "react"
import './Frinds.css'
import Frind from "./Frind"

export default function Frinds(){
    const [frinds, setFrinds] = useState([])

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setFrinds(data))
}, [])

    return (
        <div className="box">
            <h3>Frinds:{frinds.length}</h3>
            {
                frinds.map(frind => <Frind f={frind}></Frind>)
            }
            
        </div>
    )
}

/**
 * 1. state to hold data
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 3. set losded data to the state 
 */