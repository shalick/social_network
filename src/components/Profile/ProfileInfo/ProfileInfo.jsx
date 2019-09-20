import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic4.businessinsider.com%2Fimage%2F54d20445dd08955a148b456e-960%2Fpanda-china-strong.jpg&f=1&nofb=1'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;