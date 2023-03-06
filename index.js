import React from 'react';
import ReactDom  from 'react-dom';

//CSS

import './index.css'


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
// function BookList() {
//     return (
//         <section className='booklist'>
//             <Book/>
//             <Book/>
//             <Book/>
//         </section>
//     )
// }
// const Book = () => {
//     return (
//         <article className='book'>
//             <Image/>
//             <Title/>
//             <Author/>
//         </article>
//     );
// };

// const Image = () => (
//     <img
//      src = 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
//      alt='ugly love book'
//      />
// )

// const Title = () => <h1>Ugly love: A novel</h1>


// const Author = () =>  <h4 style={{color:'#617d98',fontsize:'0.75rem',margintop:'0.25rem'}}>Colleen Hoover</h4>


// ReactDom.render(<BookList/>,document.getElementById('root'));



// function BookList() {
//     return (
//         <section className='booklist'>
//             <Book/>
//             <Book/>
//             <Book/>
//         </section>
//     )
// }
// const author = 'Colleen Hoover'
// const Book = () => {
//     const title = 'Ugly love: A novel'
//     return (
//         <article className='book'>
//            <img
//      src = 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
//      alt='ugly love book'
//      />
//      <h1>{title}</h1>
//      <h4>{author.toUpperCase()}</h4>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));

//4343271530
//setting up vars

// const author = 'Colleen Hoover'
// const title = 'Ugly love: A novel'
// const img = 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 

// function BookList() {
//     return (
//         <section className='booklist'>
//             <Book job = 'developer'/>
//             <Book title = 'random title' number = {22}  />
//             <Book/>
//         </section>
//     )
// }
// const Book = (props) => {
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//      <h1>{title}</h1>
//      <h4>{author}</h4>
//      <p>{props.job}</p>
//      <p>{props.title}</p>
//      <p>{props.number}</p>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));



// const firstbook = {
//  author: 'Colleen Hoover' ,
//  title: 'Ugly love: A novel' ,
//  img: 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
// };

// const secondbook = {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg' 
// };
   

// function BookList() {
//     return (
//         <section className='booklist'>
//             <Book
//            author = {firstbook.author}
//            title = {firstbook.title}
//            img = {firstbook.img}
//            >
//            <p>
//            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
//            </p>
//            </Book>
//             <Book 
//              author = {secondbook.author}
//              title = {secondbook.title}
//              img = {secondbook.img} />
//         </section>
//     )
// }
// const Book = (props) => {
//     return (
//         <article className='book'>
//         <img src={props.img} alt='' />
//         <p>{props.title}</p>
//         <p>{props.author}</p>
//         </article>
//     );
// };

//Alternative way
// const Book = (props) => {
// const {img, title, author} = props;
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//         <p>{title}</p>
//         <p>{author}</p>
//         </article>
//     );
// };


//another Alternative way
// const Book = ({img, title, author,children}) => {
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//          {children}
//         <p>{title}</p>
//         <p>{author}</p>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));





//Lists and Keys

// const books = [
//     {
//  author: 'Colleen Hoover' ,
//  title: 'Ugly love: A novel' ,
//  img: 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
// },
// {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg' 
// },
// // {
// //     author:'Robert Greene',
// //     title: ' The 48 Laws of Power',
// //     img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg'
// // },
// ];
   
// const names = ['praveen','ravi','pradeep'];
// const newName = names.map((name)=> {
//     return <h1>{name}</h1>;
// });
// console.log(newName);

// function BookList() {
//     return <section className='booklist'>{names}</section>;
// }

// const Book = (props) => {
//     const {img,title,author} = props;
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//      <p>{title}</p>
//         <p>{author}</p>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));


// const books = [
//     {
//  author: 'Colleen Hoover' ,
//  title: 'Ugly love: A novel' ,
//  img: 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
// },
// {
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg' 
// },
// {
//     author:'Robert Greene',
//     title: ' The 48 Laws of Power',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg'
// },
// ];

// function BookList() {
//     return (
//     <section className='booklist'>
//         {books.map((book) => {
//             const{ img, title, author} = book;
//             return  <Book book={book}></Book>;
//         })}
//         </section>
//     );
// }

// const Book = (props) => {
//     const {img,title,author} = props.book;
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//      <h1>{title}</h1>
//         <h4>{author}</h4>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));







// const books = [
//     {
//     id:1,
//  author: 'Colleen Hoover' ,
//  title: 'Ugly love: A novel' ,
//  img: 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
// },
// {
//     id:2,
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg' 
// },
// {
//     id:3,
//     author:'Robert Greene',
//     title: ' The 48 Laws of Power',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg'
// },
// ];

// function BookList() {
//     return (
//     <section className='booklist'>
//         {books.map((book) => {
//             return  <Book key={book.id} book={book}></Book>;
//         })}

// {/* alternative using a index  */}
// {/* {books.map((book,index) => {
//             return  <Book key={index} book={book}></Book>;
//         })} */}
       
//          </section>
//     );
// }

// const Book = (props) => {
//     const {img,title,author} = props.book;
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//      <h1>{title}</h1>
//         <h4>{author}</h4>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));


//using spread operator


// const books = [
//     {
//     id:1,
//  author: 'Colleen Hoover' ,
//  title: 'Ugly love: A novel' ,
//  img: 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
// },
// {
//     id:2,
//     author: 'James Clear',
//     title: 'Atomic Habits',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg' 
// },
// {
//     id:3,
//     author:'Robert Greene',
//     title: ' The 48 Laws of Power',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg'
// },
// ];

// function BookList() {
//     return (
//     <section className='booklist'>
//         {books.map((book) => {
//             return  <Book key={book.id} {...book}></Book>;
//         })}
       
//          </section>
//     );
// }

// const Book = (props) => {
//     const {img,title,author} = props;
//     return (
//         <article className='book'>
//         <img src={img} alt='' />
//      <h1>{title}</h1>
//         <h4>{author}</h4>
//         </article>
//     );
// };

// ReactDom.render(<BookList/>,document.getElementById('root'));




//Events