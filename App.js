import React from 'react';
import ReactDom  from 'react-dom';

//CSS

import './index.css'


const book = [
    {
 author: 'Colleen Hoover' ,
 title: 'Ugly love: A novel' ,
 img: 'https://images-na.ssl-images-amazon.com/images/I/71E8VNPC1dL._AC_UL300_SR300,200_.jpg' 
},
{
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg' 
},
{
    author:'Robert Greene',
    title: ' The 48 Laws of Power',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg'
},
];
   
const names = ['praveen','ravi','pradeep'];
function BookList() {
    return (
        <section className='booklist'>
            <Book
           author = {firstbook.author}
           title = {firstbook.title}
           img = {firstbook.img}
           />
            <Book 
             author = {secondbook.author}
             title = {secondbook.title}
             img = {secondbook.img} />
        </section>
    )
}

const Book = (props) => {
    const {img,title,author} = props
    return (
        <article className='book'>
        <img src={img} alt='' />
     <p>{title}</p>
        <p>{author}</p>
        </article>
    );
};

ReactDom.render(<BookList/>,document.getElementById('root'));


