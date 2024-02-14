import { useState } from "react";
import { sculptureList } from './data.js';



export default function Galleary() {
    const [index, setIndex] = useState(0);
    const [showmore, setShowmore] = useState(false);
    let sculpture = sculptureList[index];

    function handleClick() {

        const newIndex = index + 1;
        setIndex(newIndex >= sculptureList.length ? 0 : newIndex);
    }

    function clickShowmore() {
        setShowmore(!showmore)
    }

    return (
        <>
            <h2 style={{ fontSize: 20, margin: "20px", background: "#8080800f", width: 300, color: "blue", textAlign: "center", padding: "10px" }}>
                <i>{sculpture.name} </i><br />
                by {sculpture.artist}
            </h2>
            <div style={{ margin: "20px", display: "flex" }}>
                <img
                    src={sculpture.url}
                    alt={sculpture.alt}
                    width={"300Px"}
                    height={"300px"}
                />

                {showmore && <p style={{ fontSize: 14, margin: "0 20px", background: "#8080800f", width: 300, color: "blue", textAlign: "center", padding: "10px" }}>
                    {sculpture.description}
                </p>}
            </div>
            <p style={{ background: "red", width: "300px", color: "white", textAlign: "center", margin: "5px 20px" }}>({index + 1} of {sculptureList.length}) </p>
            <div> 
                <button style={{ background: "blue", color: "white", padding: "5px 10px", margin: "0 150px 0 10px" }} onClick={handleClick}>
                    Next
                </button>
                <button style={{ background: "blue", color: "white", padding: "5px 10px", }} onClick={clickShowmore}>
                    {showmore ? "Hide" : "Show"} details
                </button>
            </div>

        </>
    )
}