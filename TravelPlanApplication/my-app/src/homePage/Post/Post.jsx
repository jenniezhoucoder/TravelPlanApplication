import './Post.css'
import PostList from './PostList';

const post_list = [
    {
        id: 1,
        image: './image/explore/image1.jpg',
        theme: 'Sea',
        description: 'Seaside in Shenzhen',
        likes: 111,
        collection: 11,
    },
    {
        id: 2,
        image: './image/explore/image2.jpg',
        theme: 'Flowers',
        description: 'Tulip town in Seattle',
        likes: 222,
        collection: 22,
    },
    {
        id: 3,
        image: './image/explore/image3.jpg',
        theme: 'Lighthouse',
        description: 'Lighthouse in the long beach',
        likes: 333,
        collection: 33,
    },
    {
        id: 4,
        image: './image/explore/image4.jpg',
        theme: 'Art Gallery',
        description: 'Amazing watermelon!',
        likes: 444,
        collection: 44,
    },
    {
        id: 5,
        image: './image/explore/image5.jpg',
        theme: 'Summer Trip',
        description: 'Me by the sea',
        likes: 555,
        collection: 55,
    },
    {
        id: 6,
        image: './image/explore/image6.jpg',
        theme: 'Selfie',
        description: 'Me by the tulips',
        likes: 666,
        collection: 66,
    },
    {
        id: 7,
        image: './image/explore/image7.jpg',
        theme: 'Architecture',
        description: 'A night in Shanghai',
        likes: 777,
        collection: 77,
    },
    {
        id: 8,
        image: './image/explore/image8.jpg',
        theme: 'Art',
        description: 'Some words',
        likes: 888,
        collection: 88,
    },
    {
        id: 9,
        image: './image/explore/image9.jpg',
        theme: 'Architecture',
        description: 'A place in Beijing',
        likes: 999,
        collection: 99,
    },
]

function Post() {
    return (
        <div className='explore_page'>
            <div className='explore'>
                {
                    post_list.map(post => {
                        return(
                            <PostList key={post.id} post={post}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Post;

