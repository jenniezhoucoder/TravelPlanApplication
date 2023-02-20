import './Inspo.css';

function Inspo(props) {

    function deleteInspo() {
        props.onDeleteInspo(props.inspo.id);
    }

    return (

        <div className='post'>
            <div>
               <button className='post_button' onClick={deleteInspo}>X</button>
            </div>
            <div className='post_image'>
                <img src={`${props.inspo.image}`} alt="" />
            </div>
            <div className='post_theme'>{props.inspo.theme}</div>
            <div className='post_description'>{props.inspo.description}</div>
            

        </div>
    )
}

export default Inspo;

