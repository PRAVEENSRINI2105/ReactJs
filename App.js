import React from 'react';
//import App from 


const App = () => {
  return (
   <h1>App</h1>
  );
}

export default App;






//Events, state and useEffect


// import {useState, useEffect} from 'react';
// import './App.css';




// const App = () => {
//   const[counter, setcounter] = useState(0);
  
//   useEffect(() => {
//    alert("you changed the counter to " + counter);
//   },[counter]);
  
  
  
//   return (
//     <div className="App">
//     <button onClick={() => setcounter((prevCount) => prevCount - 1)}>-</button>
//      <h1>{counter}</h1>
//      <button onClick={() => setcounter((prevCount) => prevCount + 1)}>+</button>
//     </div>
//   );
// }

// export default App;



//props

// import './App.css';

// const Person = (props) => {
//   return (
//     <>
//     <h1>Name: {props.name}</h1>
//     <h2>Last Name: {props.LastName}</h2>
//     <h2>Age: {props.age}</h2>
//     </>
//   )
// }



// const App = () => {
//   const name = 'praveen';
//   const isNameShowing = true;

//   return (
//     <div className='App'>
//       <Person name={'Revi'} LastName={'Raj'} age={'21'}/>
//       <Person name={'pradeep'} LastName={'thiru'} age={'21'}/>
//       <Person />
//       <h1>Hello{isNameShowing ? name: 'someone'},{name}</h1>
//     </div>
//   );
// }

// export default App;













































































































































































//custom components

// import {useState} from 'react'

// const Hi = (props) => {
//   const {num} = props;
//   return (
//     <div>Hi there {num}.</div>
//   )
// }
// function App() {

//   const [number, setNumber] = useState(0);
  
//   const add = () => {
//     setNumber(number+1)
//   }
  
//   return (
//     <div className="App">
//       <Hi num = {number} />
//       <div>Number={number}</div>
//       <button onClick = {add}>Add</button>
//     </div>
//   );
// }

// export default App;
