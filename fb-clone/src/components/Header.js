import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Header({setClick, click}) {

    const [{ user }, dispatch] = useStateValue()

    // defined the click funtion passed as a props from appjs
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>

        <div className='header__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg' alt='Logo' />

            <div className='header__input'>
                <SearchIcon />
                <input type='text' placeholder='Search facebook' />
            </div>
        </div>

        <div className='header__center'>
            <div className='header__option icon'>
                <HomeIcon fontSize='large'/>
            </div>
            <div className='header__option icon'>
                <FlagIcon fontSize='large'/>
            </div>
            <div className='header__option icon'>
                <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className='header__option icon'>
                <StorefrontIcon fontSize='large'/>
            </div>
            <div className='header__option icon'>
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
            <div className='header__option menu' onClick={handleClick}>
                <MenuSharpIcon fontSize='large'/>
            </div>
        </div>

        <div className='header__right'>

            <div className='header__info'>
                <Avatar src={user.photoURL}/>
                <h4>KamTech</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>

            <IconButton>
                <ForumIcon />
            </IconButton>

            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>

            <IconButton>
                <ExpandMoreIcon />
            </IconButton>

            <div className='header__info header__info2'>
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>
        </div>

    </div>
  )
}

export default Header