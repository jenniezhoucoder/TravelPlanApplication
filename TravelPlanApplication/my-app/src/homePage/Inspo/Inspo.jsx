import './Inspo.css';
import { useState } from 'react';
import InspoList from './InspoList';
import AddInspoList from './AddInspoList';

const initial_Inspos = [
    {
        id: 1,
        image: './image/inspo/art.JPG',
        theme: 'Art',
        description: 'Books in the book store',
    },
    {
        id: 2,
        image: './image/inspo/nature.JPG',
        theme: 'Nature',
        description: 'This is a picture of flowers',
    },
    {
        id: 3,
        image: './image/inspo/human.JPG',
        theme: 'Human',
        description: 'This is Nana Ouyang',
    },
    {
        id: 4,
        image: './image/inspo/food.JPG',
        theme: 'Food',
        description: 'Delicious ladyM cake',
    },
]

function Inspo() {
    const [inspolist, setInspoList] = useState(initial_Inspos);
    const [status, setStatus] = useState(false);

    function addInspo(newInspo) {
        setInspoList (
            [...inspolist,
            newInspo]
        );
    }

    function deleteInspo(id) {
        setInspoList(inspolist.filter((list) => {
            return list.id !== id;
        }));
    }

    function changeStatus() {
        setStatus(!status);
    }

    return (
        <div className='post_page'>
            <div className='post_owner'>
                {
                    inspolist.length === 0?
                    (<div className='no_content'>Adding your own inspo here!</div>):
                    (inspolist.map(inspo => {
                        return (
                            <InspoList key={inspo.id} inspo={inspo} onDeleteInspo={deleteInspo}/>
                        );
                    }))
                }
            </div>

            <hr className='post_line'/>

            <div className='add_status'>
                <button onClick={changeStatus}>More</button>
            </div>
            {status && <div className='change' onClick={changeStatus}/>}
            {status && <AddInspoList onAddInspo={addInspo} onBack={changeStatus}/>}
        </div>
    )
}

export default Inspo;