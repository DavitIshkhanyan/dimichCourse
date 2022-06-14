import s from './Post.module.css';
import { useState } from 'react';

const Post = ({ src, message }) => {
    let [count, setCount] = useState(0);
    return <div className={s.item}>
        <img src={src} />
        {message}
        <div>
            <span>{count}</span><br/>
            <span onClick={() => setCount(count + 1)}>like</span>
        </div>
    </div>
}

export default Post;