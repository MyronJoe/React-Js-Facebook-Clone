import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

function Header() {
  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' alt='Logo' />

            <div className='header__input'>
                <SearchIcon />
                <input type='text' placeholder='What is on your mind' />
            </div>
        </div>

        <div className='header__center'>
            <div className='header__option'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <FlagIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <StorefrontIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
        </div>

        <div className='header__right'></div>

    </div>
  )
}

export default Header