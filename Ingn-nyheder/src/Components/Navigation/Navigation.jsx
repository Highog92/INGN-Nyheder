import '../../App.scss'
import { Link } from 'react-router-dom';
// import { Sling as Hamburger } from 'hamburger-react'
import { useState } from 'react';




export const Navigation = () => {

    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked")
    const [menuClass, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
    
            <nav className='navStyle'>
                <Link to="/"><h1 className='logo'>INGN</h1></Link>
                <div className='burger-menu' onClick={updateMenu}>
                    <Link to="/alle" className={burgerClass} >Alle</Link>
                    <p>|</p>
                    <Link to="/indland" className={burgerClass}  >Indland</Link>
                    <p>|</p>
                    <Link to="/udland" className={burgerClass}  >Udland</Link>
                    <p>|</p>
                    <Link to="/teknologi" className={burgerClass}  >Teknologi</Link>
                    <p>|</p>
                    <Link to="/sport" className={burgerClass} >Sport</Link>
                    <p>|</p>
                    <Link to="/politik" className={burgerClass} onClick={updateMenu}>Politik</Link>
                    <p>|</p>
                    <Link to="/samfund" className={burgerClass} onClick={updateMenu}>Samfund</Link>
                </div>
                <div className={menuClass}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 26 26">
                        <path fill="currentColor" d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z" /></svg>
                    {/* <Hamburger toggled={isOpen} toggle={setIsOpen} /> */}
                </div>
            </nav>
    

    )
}