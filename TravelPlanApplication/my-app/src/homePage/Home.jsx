import './Home.css';
import { useState } from 'react';
import Todo from './Todo/Todo';
import Inspo from './Inspo/Inspo';
import Post from './Post/Post';
import About from './About/About';
import Privacy from './Privacy/Privacy';

const menu = ['Plan', 'Post', 'Explore', 'About', 'Privacy']

function Home() {

    const [selectTitle, setSelectTitle] = useState();

    function changeState(title){
        setSelectTitle(title);
    }

    return (

    <div className="homepage">
        <header>
          <a className="skip_link" href='#main'>Skip to content</a>
           <h1 className='login_heading'>JUNNI NOTION</h1>
            <nav className="menu">
                <ul className="menulist">
                    {
                        menu.map(title => {
                            return (
                                <li
                                    key={`${title}`}
                                    className={`menu_title ${selectTitle === title ? 'menu--open' : ''}`}>
                                    <button className={`${title}`} onClick={() => changeState(title)}>{title}</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
       
        {!selectTitle && 
        <div className="personal_page" id="main">
            <img className='personal_image' src="/image/title.JPG" alt="this is the personal page" /> 
            <p>Welcome to Junni Notion</p>
            <p>A fantasy world created by Junni</p>
        </div>}
        
        {selectTitle === 'Plan' && <Todo/>}
        {selectTitle === 'Post' && <Inspo/>}
        {selectTitle === 'Explore' && <Post/>}
        {selectTitle === 'About' && <About/>}
        {selectTitle === 'Privacy' && <Privacy/>}


        <footer>
            <p>Author: Junni zhou</p>
            <p>Contact: zhou.junn@northeastern.edu</p>
        </footer>
    </div>
    )
}

export default Home;