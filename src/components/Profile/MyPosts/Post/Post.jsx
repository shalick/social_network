import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className='posts'>
            <div className={s.item}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Croatian_Special_Police_Logo.svg/724px-Croatian_Special_Police_Logo.svg.png'></img>
                { props.message }
                <div>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;