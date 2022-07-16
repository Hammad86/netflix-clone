import React from 'react';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import './ProfileScreen.css';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='avatar'/>
                <div className='profileScree__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <div className='profilescreen__package'>
                        <div className='profilescreen__text'>
                            <p>Premium</p>
                            <p>4K + HDR</p>
                        </div>
                        <button className='profilescreen__subcribe'>Subscribe</button>
                        </div>
                        <div className='profilescreen__package'>
                        <div className='profilescreen__text'>
                            <p>Standard</p>
                            <p>1080p</p>
                        </div>
                        <button className='profilescreen__subcribe'>Subscribe</button>
                        </div>
                        <div className='profilescreen__package'>
                        <div className='profilescreen__text'>
                            <p>Basic</p>
                            <p>720p</p>
                        </div>
                        <button className='profilescreen__subcribe'>Subscribe</button>
                        </div>
                    <button
                    className='profileScreen__signOut'
                    onClick={()=>auth.signOut()}> Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen