import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post src='https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png' description='post 1' message='Hi, how are you?' />
            <Post message="It's my first post" />
        </div>
    </div>
}

export default MyPosts;