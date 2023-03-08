import './App.css';
import Header from './header';
import Footer from './footer';

// function Custom(){
//     return (
// <div>
//     <h1>Weeks</h1>
// <ol>
//     <li>Sunday</li>
//     <li>Monday</li>
//     <li>Tuesday</li>
//     <li>Wednesday</li>
//     <li>Thursaday</li>
//     <li>Friday</li>
//     <li>saturday</li>
// </ol>
// </div>
//     )
// }

//export default Custom



//parent and child

// function Header() {
//     return (
// <header>
// <nav>
// <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="example" className='nav-logo'></img>
// <ul className="nav-items">
// <li>Pricing</li>
// <li>About</li>
// <li>Contact</li>
// </ul>
// </nav>
// </header>
//     )
// }

// function Footer() {
//     return(
//         <footer>
//             <p>©2023 Aspire Systems. All right reserved.</p>
//         </footer>
//     )
// }

function Complex(){
    return(
        <div>
            <Header />
            <h1 className="header">Reasons I'm excited to learn React</h1>
             <ol>
               <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
               <li>I'm more likely to get a job as a developer if i know React</li>
             </ol>
             <Footer />
        </div>
    )
}

export default Complex