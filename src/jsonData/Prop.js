
// state and prop diffrance 
// state are changebal every time 
// prop are not change 

// import { useState } from "react";

import { useState } from "react";

const Props = () => {
    const greeting = "Welcome Doit E-Commerce Store.";
    const [isShow, setShow] = useState(true);

    const handeleShow = () => {
        setShow(!isShow);
    };
    return (
        <div>
            <button onClick={handeleShow} type="button">
                {isShow ? "Hide" : "Show"} Toggel
            </button>
            {isShow ?<Welcome text ={greeting}/> : null}

        </div>
    );
};

const Welcome =({text}) =>{
    return(
        <h1>
            {text}
        </h1>
    )
}

export default Props


// const Props = () => {
//     const [greeting, setGreeting] = useState('Welcome to React');
//     const [isShow, setShow] = useState(true);
  
//     const handleChange = (event) => {
//       setGreeting(event.target.value);
//     };
  
//     const handleToggle = () => {
//       setShow(!isShow);
//     };
  
//     return (
//       <div>
//         <Button label="Toggle" onClick={handleToggle} />
  
//         <input type="text" value={greeting} onChange={handleChange} />
  
//         {isShow ? <Welcome text={greeting} /> : null}
//       </div>
//     );
//   };
  
//   const Button = ({ label, onClick }) => {
//     return (
//       <button onClick={onClick} type="button">
//         {label}
//       </button>
//     );
//   };
  
//   const Welcome = ({ text }) => {
//     return <h1>{text}</h1>;
//   };
  
//   export default Props;