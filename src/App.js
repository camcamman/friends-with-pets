import React from "react";
import FriendList from "./FriendList";
import Info from "./Info"


export default function () {
    const people = Info.map(item => {
        const pets = item.pets.map(obj => {
            return(
                <div>
                    <FriendList 
                    thing={obj}
                    />
                </div>
            )
        }
        )
        return (pets)
    })
    return (people)
}
