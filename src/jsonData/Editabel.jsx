import React, { useState } from "react";
import useToggle from "./Customhook";


const Editablel = () => {
    const [editabel, SetEditabel] = useState(false);
    const [inputvalue, SetInputvalue] = useState("Titel");



    const toggelEditabel = () => {
        SetEditabel((prevEditabel) => !prevEditabel);
    };

    const hendelInputchange = (e) => {
        SetInputvalue(e.target.value);
    };

    return (
        <div>
            {editabel ? (
                <label htmlFor="titel">
                    Titel :
                    <input
                        type="text"
                        id="titel"
                        value={inputvalue}
                        onChange={hendelInputchange}
                    />
                </label>
            ) : (
                <><h4>Titel : {inputvalue}</h4> </>
            )}
            <button onClick={toggelEditabel}>{editabel ? "Cancel" : "Edit"} </button>
        </div>

    );
}


export default Editablel;

// const Accordion = () => {
//     const { status: expanded, toggleStatus: toggleexpanded } = useToggle();

//     return (
//         <div>
//             <button onClick={toggleexpanded}>
//                 Header<span>{expanded ? "-" : "+"} </span>
//             </button>
//             {expanded && <div> hi my name is ankit shah and my age is 34 and i am a softwere devloper  </div>}
//         </div>
//     );
// };

// export default Accordion;