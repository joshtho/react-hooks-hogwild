import React, { useState } from "react";

function Hog({pigs}) {
    const [clicked, setClicked] = useState(false)
    function handleClick() {
        setClicked(!false)
    }
    return (
       <div onClick={handleClick} className="pigTile">
           <h3>{pigs.name}</h3>
           <img src={pigs.image} alt={pigs.specialty} />
           {clicked ? <p> Specialty: {pigs.specialty}</p> : null }
           {clicked ? <p> {pigs.greased ? "So greasy!" : "Needs more grease!"}</p> : null }
           {clicked ? <p> Weight: {pigs.weight}</p> : null }
           {clicked ? <p> Highest Medal Achieved: {pigs["highest medal achieved"]}</p> : null }
       </div>

    )
}

export default Hog