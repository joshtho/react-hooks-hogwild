import React, { useState } from "react"
import hogs from "../porkers_data"
import Hog from "./Hog"

function PigTiles() {
    const [greased, setGreased] = useState(false)
    const [category, setCategory] = useState("All")
    function handleClick() {
        setGreased(!greased)
    }
    function handleChange(event){
        setCategory(event.target.value)
    }
    function filterAndSortHogs() {
        const filtered =  hogs.filter(
            hog => greased ? hog.greased : true 
        )
        if(category === "All") {
            return filtered
        } else if(category === "Name") {
            return filtered.sort((a,b) => {
                if(a.name > b.name) {
                    return 1
                } else {
                    return -1
                }
            })
        } else {
            return filtered.sort((a,b) => a.weight - b.weight)
        }
    }
    return (
        <div className="ui grid container" >
        <button onClick={handleClick}>{greased ? "All hogs" : "Greased Hogs Only"}</button>
        <select onChange={handleChange} >
            <option>All</option>
            <option>Name</option>
            <option>Weight</option>
        </select>
            
        
        {
           filterAndSortHogs().map(hog => {
            return <Hog pigs={hog} /> 
            })
        }
        
        </div>
        
    )
}

export default PigTiles