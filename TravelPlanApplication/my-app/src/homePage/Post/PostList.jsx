import './Post.css';

function PostList(props) {

    return (
        <div className='explore_list'>
            <div className='explore_image'><img src={`${props.post.image}`} alt=""/></div>
            <div className='explore_theme'>{props.post.theme}</div>
            <div className='explore_description'>{props.post.description}</div>
            <hr className='explore_line'/>
            <div className='explore_button'>
                <button className='like_button'>
                   <img src='./image/like.svg' alt=""/>
                   <span className='like_num'>{props.post.likes}</span>
                </button>
                <button className='collection_button'>
                   <img src='./image/collect.svg' alt=""/>
                   <span className='collection_num'>{props.post.collection}</span>
                </button>
            </div>
        </div>
    )
}

export default PostList;