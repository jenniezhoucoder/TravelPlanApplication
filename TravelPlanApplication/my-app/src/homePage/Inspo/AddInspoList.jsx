import './Inspo.css';
import { useState } from 'react';

function AddInspoList(props) {
    const [submitImage, setSubmitImage] = useState('');
    const [submitTheme, setSubmitTheme] = useState('');
    const [submitDescription, setSubmitDescription] = useState('');

    function getImage(e) {
        setSubmitImage(e.target.value);
    }

    function getTheme(e) {
        setSubmitTheme(e.target.value);
    }

    function getDescription(e) {
        setSubmitDescription(e.target.value);
    }

    function submitInspo(e) {
        e.preventDefault();

        const inspo = {
            id: Math.random(),
            image: submitImage,
            theme: submitTheme,
            description: submitDescription,
        }

        setSubmitImage('');
        setSubmitTheme('');
        setSubmitDescription('');

        props.onBack();
        props.onAddInspo(inspo);
    }

    return (
        <div className='post_container'>

            <form className='post_content' onSubmit={submitInspo}>
                <label htmlFor='image'><span className='required'>*</span>Image:</label>
                <input type="text" name="image" onChange={getImage} value={submitImage} placeholder="./image/inspo/art.JPG" required/>

                <label htmlFor='theme'><span className='required'>*</span>Theme:</label>
                <input type="text" name="theme" onChange={getTheme} value={submitTheme} required/>

                <label htmlFor='description'><span className='required'>*</span>Description:</label>
                <textarea onChange={getDescription} value={submitDescription} required/>

                <button className='submit_button' type='submit'>Submit</button>
            </form>
            
        </div>
    )
}

export default AddInspoList;