import React from 'react';
import ReactDom  from 'react-dom';

//CSS

import './index.css'

//In css Inline will be more powerful so the external css can't be the strongest

// function Greeting(){
//     return <h1>Welcome to ReactJS</h1>
// }

// const Greeting = () => {
// return React.createElement('h1',{},'Welcome');
// }


// const Greeting = () => {
// return React.createElement('div',{},React.createElement('h1',{},'Praveen'));
// }



// function Greeting() {
//     return (
//          <div>
//             <h1>Welcome</h1>
//          </div>
//     );
// }

//nested components
// function Greeting() {
//     return (
//         <div>
//         <Person/>
//         <City/>
//         </div>
//     )
// }

// const Person = () => <h1>praveen</h1>
// const City = () => {
//                       return <p>Salem</p>
// }

// ReactDom.render(<Greeting/>,document.getElementById("root"))

//JSX Rules

//Return a single element only the opening and closing tag must be wrapped we can't create the two parent tag 
//<React.fragment> </React.fragment> tag will be there to use for repeteating (<div><div><li></li> )a div simultaneously we also use <> </>

//camel case must be use for HTML Attributes

//className instead of using class

//close every element

//formatting



// PROJECT 1 (AMAZON BOOK SELLING)
function BookList() {
    return (
        <section className='booklist'>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}
const Book = () => {
    return (
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    );
};

const Image = () => (
    <img
     src = 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
     alt='ugly love book'
     />
)

const Title = () => <h1>Ugly love: A novel</h1>


const Author = () =>  <h4 style={{color:'blue',fontsize:'0.75rem',margintop:'0.25rem'}}>Colleen Hoover</h4>


ReactDom.render(<BookList/>,document.getElementById('root'));