import React from "react";


export default function (prop) {
    return(
        <div>
            <h1>{prop.thing.name}</h1>
            { <h1>{prop.thing.breed}</h1> }
        </div>
    )
}


