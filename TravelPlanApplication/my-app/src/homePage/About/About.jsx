import './About.css';
import { useState } from 'react';
import IntroTab from './IntroTab';
import PrefaceTab from './PrefaceTab';
import TodoTab from './TodoTab';
import InspoTab from './InspoTab';
import PostTab from './PostTab';

const initial_title = ['Intro', 'Plan', 'Post', 'Explore', 'Conclusion'];

function About() {
    let initialTitles = initial_title[0];
    const[titles] = useState(initial_title);
    const[selectTitle, setSelectTitle] = useState(initialTitles);

    function changeStatus(title) {
        setSelectTitle(title);
    }

    return (
        <div className='about_page'>
            <div className='title'>
                {
                    titles.map(title => {
                        return (
                            <div 
                                key={`${title}`}
                                className={`tab_title ${selectTitle === title ? 'tab--open' : ''}`}>
                                <button className={`${title}`} onClick={() => changeStatus(title)}>{title}</button>
                            </div>
                        )
                    })
                }
            </div>
            {selectTitle === 'Intro' && <IntroTab/>}
            {selectTitle === 'Plan' && <PrefaceTab/>}
            {selectTitle === 'Post' && <TodoTab/>}
            {selectTitle === 'Explore' && <InspoTab/>}
            {selectTitle === 'Conclusion' && <PostTab/>}
        </div>
    )
}

export default About;

